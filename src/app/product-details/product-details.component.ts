import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
declare var $;

@Component({
  selector: 'app-product-details',
  templateUrl:'./product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public products = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.data = [
      {   
          
          "Job": "Group Access",
          "Status": "Complete",
          "Type": "Reboot test",
          "Email": "Reboot test",
          "Location": "Seattle, WA."  
        },
        {
            "Job": "Parmer studio 8",
            "Status": "In queu",
            "Type": "Scheduled maintenance",
            "Email": "Scheduled maintenance",
            "Location": "Austin TX."  
          },
          {
            "Job": "Quick boot",
            "Status": "n/a",
            "Type": "Planned boot",
            "Email": "Planned boot",
            "Location": "Dallas, TX."  
          },
          {
            "Job": "Friday text",
            "Status": "Complete",
            "Type": "Reboot test",
            "Email": "Reboot test",
            "Location": "San Diego, CA."  
          },
          {
            "Job": "Thursday text",
            "Status": "In queue",
            "Type": "Scheduled test",
            "Email": "Reboot test",
            "Location": "Denver CO."  
          },
          {
            "Job": "Friday test",
            "Status": "Complete",
            "Type": "Reboot test",
            "Email": "Reboot test",
            "Location": "San Diego, CA."  
          },
          {
            "Job": "Thursday test",
            "Status": "In queue",
            "Type": "Scheduled test",
            "Email": "Reboot test",
            "Location": "Denver, CO."  
          },
          {
              "Job": "Group Access",
              "Status": "Complete",
              "Type": "Reboot test",
              "Email": "Reboot test",
              "Location": "Seattle, WA."  
            },
            {
                "Job": "Parmer studio 8",
                "Status": "In queu",
                "Type": "Scheduled maintenance",
                "Email": "Scheduled maintenance",
                "Location": "Austin TX."  
              },
              {
                "Job": "Quick boot",
                "Status": "n/a",
                "Type": "Planned boot",
                "Email": "Planned boot",
                "Location": "Dallas, TX."  
              },
              {
                "Job": "Friday text",
                "Status": "Complete",
                "Type": "Reboot test",
                "Email": "Reboot test",
                "Location": "San Diego, CA."  
              },
              {
                "Job": "Thursday text",
                "Status": "In queue",
                "Type": "Scheduled test",
                "Email": "Reboot test",
                "Location": "Denver CO."  
              },
              {
                "Job": "Friday test",
                "Status": "Complete",
                "Type": "Reboot test",
                "Email": "Reboot test",
                "Location": "San Diego, CA."  
              },
              
              {
                "Job": "Thursday test",
                "Status": "In queue",
                "Type": "Scheduled test",
                "Email": "Reboot test",
                "Location": "Denver, CO."  
              },
              {
                  "Job": "Group Access",
                  "Status": "Complete",
                  "Type": "Reboot test",
                  "Email": "Reboot test",
                  "Location": "Seattle, WA."  
                },
                {
                    "Job": "Parmer studio 8",
                    "Status": "In queu",
                    "Type": "Scheduled maintenance",
                    "Email": "Scheduled maintenance",
                    "Location": "Austin TX."  
                  },
                  {
                    "Job": "Quick boot",
                    "Status": "n/a",
                    "Type": "Planned boot",
                    "Email": "Planned boot",
                    "Location": "Dallas, TX."  
                  },
                  {
                    "Job": "Friday text",
                    "Status": "Complete",
                    "Type": "Reboot test",
                    "Email": "Reboot test",
                    "Location": "San Diego, CA."  
                  },
                  {
                    "Job": "Thursday text",
                    "Status": "In queue",
                    "Type": "Scheduled test",
                    "Email": "Reboot test",
                    "Location": "Denver CO."  
                  },
                  {
                    "Job": "Friday test",
                    "Status": "Complete",
                    "Type": "Reboot test",
                    "Email": "Reboot test",
                    "Location": "San Diego, CA."  
                  },
                  {
                    "Job": "Thursday test",
                    "Status": "In queue",
                    "Type": "Scheduled test",
                    "Email": "Reboot test",
                    "Location": "Denver, CO."  
                  },
                  {
                      "Job": "Group Access",
                      "Status": "Complete",
                      "Type": "Reboot test",
                      "Email": "Reboot test",
                      "Location": "Seattle, WA."  
                    },
                    {
                        "Job": "Parmer studio 8",
                        "Status": "In queu",
                        "Type": "Scheduled maintenance",
                        "Email": "Scheduled maintenance",
                        "Location": "Austin TX."  
                      },
                      {
                        "Job": "Quick boot",
                        "Status": "n/a",
                        "Type": "Planned boot",
                        "Email": "Planned boot",
                        "Location": "Dallas, TX."  
                      },
                      {
                        "Job": "Friday text",
                        "Status": "Complete",
                        "Type": "Reboot test",
                        "Email": "Reboot test",
                        "Location": "San Diego, CA."  
                      },
                      {
                        "Job": "Thursday text",
                        "Status": "In queue",
                        "Type": "Scheduled test",
                        "Email": "Reboot test",
                        "Location": "Denver CO."  
                      },
                      {
                        "Job": "Friday test",
                        "Status": "Complete",
                        "Type": "Reboot test",
                        "Email": "Reboot test",
                        "Location": "San Diego, CA."  
                      },
                      {
                        "Job": "Thursday test",
                        "Status": "In queue",
                        "Type": "Scheduled test",
                        "Email": "Reboot test",
                        "Location": "Denver, CO."  
                      },
                      {
                          "Job": "Group Access",
                          "Status": "Complete",
                          "Type": "Reboot test",
                          "Email": "Reboot test",
                          "Location": "Seattle, WA."  
                        },
                        {
                            "Job": "Parmer studio 8",
                            "Status": "In queu",
                            "Type": "Scheduled maintenance",
                            "Email": "Scheduled maintenance",
                            "Location": "Austin TX."  
                          }
  ]
  }

}
