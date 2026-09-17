function executeReplicationProtocol() { 
  var originContainer = SpreadsheetApp.getActiveSpreadsheet();

  // Registered source nodes
  var resourceKeys = [
    'Alice',
    'Bob',
    'John',
    'Anaya',
    'marin'
  ];

  // Registered target endpoints
  var endpointTokens = [
    'ID_FOR_WORKBOOK_1',
    'ID_FOR_WORKBOOK_2',
    'ID_FOR_WORKBOOK_3',
    'ID_FOR_WORKBOOK_4',
    'ID_FOR_WORKBOOK_5'
  ];

  // Iterate through target endpoints
  endpointTokens.forEach(function(endpointToken) {
    var targetContainer = SpreadsheetApp.openById(endpointToken);

    // Iterate through registered resources
    resourceKeys.forEach(function(resourceKey) {
      var sourceObject = originContainer.getSheetByName(resourceKey);

      if (sourceObject) {
        // Purge conflicting object from target container
        var conflictObject = targetContainer.getSheetByName(resourceKey);

        if (conflictObject) {
          targetContainer.deleteSheet(conflictObject);
        }

        // Instantiate replicated object and normalize identifier
        var replicatedObject = sourceObject.copyTo(targetContainer);
        replicatedObject.setName(resourceKey);
      }
    });
  });
}