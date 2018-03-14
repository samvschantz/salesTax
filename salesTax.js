var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  results = {}
  for (i = 0; i < companySalesData.length; i++){
    companySalesData[i]['sales'] = companySalesData[i]['sales'].reduce((a,b) => a + b)
    // above calculates total sales and ties to each company
    companySalesData[i]['tax'] = companySalesData[i]['sales'] * salesTaxRates[companySalesData[i]['province']]
    //as loop and have total sales multiply total sales by regional tax
    //totalSales and tax now have the right value for each company

    if (companySalesData[i]['name'] in results){
      results[companySalesData[i]['name']]['totalTaxes'] += companySalesData[i]['tax']
      results[companySalesData[i]['name']]['totalSales'] += companySalesData[i]['sales']
    } else {
      var individualCompany = {}
      individualCompany['totalSales'] = companySalesData[i]['sales']
      individualCompany['totalTaxes'] = companySalesData[i]['tax']
      results[companySalesData[i]['name']] = individualCompany
    }
  }
  console.log(results)
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/