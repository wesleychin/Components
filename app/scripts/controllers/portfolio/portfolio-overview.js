'use strict';

angular.module('componentsApp')
.controller('PortfolioOverviewCtrl', function ($scope, $http, $timeout, $filter) {
	$scope.portfolioOverviewGrid = {  
		dataSource:{  
			type:"json",
			transport:{  
				read:{  
					url:"api/portfolio/portfolio-overview.json"
				}
			},
			table:null
		},
		scrollable:false,
		resizable:true,
		reorderable:true,
		sortable:true,
		pageable:false,
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns:[  
		{  
			title:"Instrument",
			field:"instrument",
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			columns:[  
			{  
				title:"Code",
				field:"code",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			},
			{  
				title:"Quality<br/>(pending)",
				field:"instrument.amount",
				width:50,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			}
			]
		},
		{  
			title:"Cost (3)",
			field:"cost",
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			columns:[  
			{  
				title:"Unit R",
				field:"unitR",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			},
			{  
				title:"Total R",
				field:"totalUnit",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			}
			]
		},
		{  
			title:"Previous<br/>close/MT<br/>M R",
			field:"previous",
			width:200,
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			attributes:{  
				style:"text-align:right;"
			}
		},
		{  
			title:"Current/ Bid",
			field:"currentBid",
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			columns:[  
			{  
				title:"Price<br/>R (2)",
				field:"priceR2",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			},
			{  
				title:"Total R",
				field:"totalRCurrent",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			}
			]
		},
		{  
			title:"Today's movement",
			field:"movementToday",
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			columns:[  
			{  
				title:"Price change R<br/>% change",
				field:"priceChangeToday",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			},
			{  
				title:"Profit/Loss R",
				field:"profitLossToday",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			}
			]
		},
		{  
			title:"Total movement",
			field:"movementTotal",
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			columns:[  
			{  
				title:"Price change R<br/>% change",
				field:"priceChangeTotal",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			},
			{  
				title:"Profit/Loss<br/>R (4)",
				field:"profitLossTotal",
				width:200,
				headerAttributes:{  
					style:"text-align:center; vertical-align: middle;"
				},
				attributes:{  
					style:"text-align:right;"
				}
			}
			]
		},
		{  
			title:"Initial<br/>margin R",
			field:"initialMargin",
			width:200,
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			attributes:{  
				style:"text-align:right;"
			}
		},
		{  
			title:"% of<br/>portfolio",
			field:"portfolio",
			width:200,
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			attributes:{  
				style:"text-align:right;"
			}
		},
		{  
			title:"On expiry",
			field:"onExpiry",
			width:200,
			headerAttributes:{  
				style:"text-align:center; vertical-align: middle;"
			},
			attributes:{  
				style:"text-align:right;"
			}
		}
		], 
    	aggregate: [ { field:"instrument.amount", aggregate: "sum"} ]
	}

	$scope.portfolioOverviewGridAdditionalInformation = function(dataItem) {
		$http.get('/api/portfolio/portfolio-overview.json').success(function(response) {
			var single_object = $filter('filter')(response, function (d) {return d.id === dataItem.id;})[0];
			$scope.portfolioOverviewGridMetaData = single_object;
		});
	}; 
});		