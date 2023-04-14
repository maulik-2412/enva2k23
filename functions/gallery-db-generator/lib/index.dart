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

class Gallery {
  final String eventName;
  final String eventImageId;

  const Gallery({
    required this.eventName,
    required this.eventImageId,
  });

  Map<String, dynamic> toMap() => {
        'eventName': eventName,
        'eventImageId': eventImageId,
      };

  factory Gallery.fromMap(Map<String, dynamic> map) {
    return Gallery(
      eventName: map['eventName'],
      eventImageId: map['eventImageId'],
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

  /// Get the Gallery Bucket
  try {
    final galleryBucketData = await storage.listFiles(bucketId: 'gallery');

    int documentsAdded = 0;

    final galleryCollectionData = await database.listDocuments(
      databaseId: 'gallery',
      collectionId: 'gallery',
    );
    if (galleryBucketData.total == 0) {
      res.json({
        'message': 'No images found in the gallery bucket',
      });
      return;
    } else if (galleryBucketData.total > 0) {
      if (galleryCollectionData.total != 0) {
        final data = galleryCollectionData.documents.map((e) => Gallery.fromMap(e.data)).toList();
        final galleryBucketDataList = galleryBucketData.files.map((e) => e.$id).toList();
        for (var file in galleryBucketDataList) {
          if (!data.any((element) => element.eventImageId == file)) {
            documentsAdded++;
            await database.createDocument(
              databaseId: 'gallery',
              documentId: ID.unique(),
              collectionId: 'gallery',
              data: Gallery(
                eventName: file.toUpperCase(),
                eventImageId: file,
              ).toMap(),
            );
          }
        }
        return;
      } else {
        final galleryBucketDataList = galleryBucketData.files.map((e) => e.$id).toList();
        for (var file in galleryBucketDataList) {
          documentsAdded++;
          await database.createDocument(
            databaseId: 'gallery',
            documentId: ID.unique(),
            collectionId: 'gallery',
            data: Gallery(
              eventName: file.toUpperCase(),
              eventImageId: file,
            ).toMap(),
          );
        }
        return;
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
