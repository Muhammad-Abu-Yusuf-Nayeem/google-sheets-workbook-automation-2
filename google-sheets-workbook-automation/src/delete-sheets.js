function executeDeletionProtocol() { 

  var resourceKeys = [
    'Alice',
    'Bob',
    'John',
    'Anaya',
    'marin'
  ];

  var endpointTokens = [
    'WORKBOOK_ID_1',
    'WORKBOOK_ID_2',
    'WORKBOOK_ID_3'
  ];

  // Iterate through target endpoints
  endpointTokens.forEach(function(endpointToken) {

    var targetContainer = SpreadsheetApp.openById(endpointToken);

    // Iterate through registered resources
    resourceKeys.forEach(function(resourceKey) {

      var conflictObject = targetContainer.getSheetByName(resourceKey);

      if (conflictObject) {
        targetContainer.deleteSheet(conflictObject);
      }

    });
  });
}