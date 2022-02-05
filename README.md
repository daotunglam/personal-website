# PortfolioAngular

## CONTROL THE FUNCTIONS OF AN OTHER COMPONENT FROM A COMPONENT:

### ex. we want that
 ``app.component`` handles the function ``changeActiveStickOnSidenav()`` of ``sidenav.component`` by scrolling, then:

````
import {header.component} from '.header/header.component';
header = HeaderComponent;
this.header.hideHeader(){...} 
````

## deploy folder dist on server but page is EMPTY
SOLUTION:
in folder ``dist/portfolio-angular/index.html``
instead ``<base href="/">``
give ``<base href="/portfolio-angular/">``