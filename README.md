# PortfolioAngular

# CONTROL THE FUNCTIONS OF AN OTHER COMPONENT FROM A COMPONENT:

## ex. we want that ``app.component`` handle the function ````changeActiveStickOnSidenav()```` of ```sidenav.component``` by scrolling.
````import {header.component} from '.header/header.component'; 
header = HeaderComponent;
this.header.hideHeader(){...} ````