import 'package:dart_appwrite/dart_appwrite.dart';

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status: status)' - function to return text response. Status code defaults to 200
    'json(obj, status: status)' - function to return JSON response. Status code defaults to 200
  
  If an error is thrown, a response with code 500 will be returned.
*/

class Sponsor {
  final String sponsorName;
  final String imageId;

  const Sponsor({
    required this.sponsorName,
    required this.imageId,
  });

  Map<String, dynamic> toMap() => {
        'sponsor_name': sponsorName,
        'image_id': imageId,
      };

  factory Sponsor.fromMap(Map<String, dynamic> map) {
    return Sponsor(
      sponsorName: map['sponsor_name'],
      imageId: map['image_id'],
    );
  }
}

Future<void> start(final req, final res) async {
  final client = Client();

  final database = Databases(client);

  final storage = Storage(client);

  if (req.variables['APPWRITE_FUNCTION_ENDPOINT'] == null ||
      req.variables['APPWRITE_FUNCTION_API_KEY'] == null) {
    print("Environment variables are not set. Function cannot use Appwrite SDK.");
  } else {
    client
        .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
        .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
        .setKey(req.variables['APPWRITE_FUNCTION_API_KEY'])
        .setSelfSigned(status: true);
  }

  const databaseId = 'envadb';

  /// Get the Sponsor Bucket
  try {
    final sponsorBucketData = await storage.listFiles(bucketId: 'sponsors');

    int documentsAdded = 0;

    final sponsorCollectionData = await database.listDocuments(
      databaseId: databaseId,
      collectionId: 'sponsors',
    );
    if (sponsorBucketData.total == 0) {
      res.json({
        'message': 'No Logos found in the gallery bucket',
      });
      return;
    } else if (sponsorBucketData.total > 0) {
      if (sponsorCollectionData.total != 0) {
        final data = sponsorCollectionData.documents.map((e) => Sponsor.fromMap(e.data)).toList();
        final sponsorBucketList = sponsorBucketData.files.map((e) => e.$id).toList();
        for (var file in sponsorBucketList) {
          if (!data.any((element) => element.imageId == file)) {
            documentsAdded++;
            await database.createDocument(
              databaseId: databaseId,
              documentId: ID.unique(),
              collectionId: 'sponsors',
              data: Sponsor(
                sponsorName: file.toUpperCase(),
                imageId: file,
              ).toMap(),
            );
          }
        }
      } else {
        final galleryBucketDataList = sponsorBucketData.files.map((e) => e.$id).toList();
        for (var file in galleryBucketDataList) {
          documentsAdded++;
          await database.createDocument(
            databaseId: databaseId,
            documentId: ID.unique(),
            collectionId: 'sponsors',
            data: Sponsor(
              sponsorName: file.toUpperCase(),
              imageId: file,
            ).toMap(),
          );
        }
      }
    }

    res.json({
      'DocumentsAdded': documentsAdded,
    });
  } on AppwriteException catch (e) {
    res.json({
      'type': e.type,
      'code': e.code,
      'message': e.message,
      'response': e.response,
    });
  }
}
