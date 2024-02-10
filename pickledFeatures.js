jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "SampleFeature1.feature",
      "Feature": {
        "Name": "SampleFeature1",
        "Description": "In order to avoid silly mistakes\r\nAs a math idiot  // https://www.youtube.com/watch?v=SjEbPftoMO0&index=10&list=PL6tu16kXT9Pp3wrsaYyNRnK1QkvVv6qdI\r\nI want to be told the sum of two numbers",
        "FeatureElements": [
          {
            "Name": "Add two numbers",
            "Slug": "add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have entered 50 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have entered 70 into the calculator",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press add",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120 on the screen",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag",
              "@Sample"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Employee Information Entry",
            "Slug": "employee-information-entry",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "Fill All The Mondatory Fields",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Age",
                    "Email",
                    "Mobile"
                  ],
                  "DataRows": [
                    [
                      "Senthil",
                      "28",
                      "vs@ms.com",
                      "1234567890"
                    ]
                  ]
                },
                "StepComments": [
                  {
                    "Text": "#Given Enter 1st Number"
                  },
                  {
                    "Text": "#And Enter 2nd Number"
                  }
                ],
                "AfterLastStepComments": [
                  {
                    "Text": "#\t| Jagadeesh | 25  | j@vs.com  | 9087654321 |"
                  },
                  {
                    "Text": "#Then Results"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Employee Information Entries",
            "Slug": "employee-information-entries",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "Fill All The Mondatory Fields - Multiple Entries",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Age",
                    "Email",
                    "Mobile"
                  ],
                  "DataRows": [
                    [
                      "Senthil",
                      "28",
                      "vs@ms.com",
                      "1234567890"
                    ],
                    [
                      "Nandeep",
                      "25",
                      "Nandeep@vs.com",
                      "9087654321"
                    ],
                    [
                      "Rahesj",
                      "26",
                      "rajesh@tcs.com",
                      "98764362789"
                    ]
                  ]
                },
                "StepComments": [
                  {
                    "Text": "#Given Enter 1st Number"
                  },
                  {
                    "Text": "#And Enter 2nd Number"
                  }
                ],
                "AfterLastStepComments": [
                  {
                    "Text": "#Then Results"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "Name",
                    "Age",
                    "Email",
                    "Mobile"
                  ],
                  "DataRows": [
                    [
                      "Senthil",
                      "28",
                      "vs@ms.com",
                      "1234567890",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Nandeep",
                      "25",
                      "Nandeep@vs.com",
                      "9087654321",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Rahesj",
                      "26",
                      "rajesh@tcs.com",
                      "98764362789",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Employee Information Entries using Outline",
            "Slug": "employee-information-entries-using-outline",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "Fill All The Mondatory Fields - Multiple Entries <Name>, <Age>, <Email> and <Mobile>",
                "StepComments": [
                  {
                    "Text": "#Given Enter 1st Number"
                  },
                  {
                    "Text": "#And Enter 2nd Number"
                  }
                ],
                "AfterLastStepComments": [
                  {
                    "Text": "#Then Results"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Creating list for ScenarioContext",
            "Slug": "creating-list-for-scenariocontext",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Create List for Employee Details",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#And I have entered 70 into the calculator"
                  },
                  {
                    "Text": "#When I press add"
                  },
                  {
                    "Text": "#Then the result should be 120 on the screen"
                  },
                  {
                    "Text": "# Step Argument Transformation"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Custom Step Argument Transformation",
            "Slug": "custom-step-argument-transformation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I see last date logged in data is 5 days from current date",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Dynamic Table Conversion for Single Row/Value",
            "Slug": "dynamic-table-conversion-for-single-rowvalue",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Getting Data from Table",
                "TableArgument": {
                  "HeaderRow": [
                    "Menu1",
                    "Menu2",
                    "Menu3",
                    "Menu4"
                  ],
                  "DataRows": [
                    [
                      "File",
                      "Edit",
                      "View",
                      "Project"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Dynamic Table Conversion for Multiple Rows/Values",
            "Slug": "dynamic-table-conversion-for-multiple-rowsvalues",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Getting Multiple Data from Table by using Dynamic Tables",
                "TableArgument": {
                  "HeaderRow": [
                    "Menu1",
                    "Menu2",
                    "Menu3",
                    "Menu4"
                  ],
                  "DataRows": [
                    [
                      "File",
                      "Edit",
                      "View",
                      "Project"
                    ],
                    [
                      "Help",
                      "Window",
                      "Analyze",
                      "Test"
                    ],
                    [
                      "Open",
                      "Close",
                      "Exit",
                      "Quit"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@mytag",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@Sample",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "Folders": [
      {
        "Folder": "SampleFeature1.feature",
        "Total": 8,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 8
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "SampleFeature1.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 8,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 8
    },
    "Features": {
      "Total": 1,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 1
    }
  },
  "Configuration": {
    "GeneratedOn": "14 April 2019 23:58:15"
  }
});