# PortfolioAngular
<a href="https://tunglam-dao.com.de>https://tunglam-dao.com.de/</a>

## CONTROL THE FUNCTIONS OF A COMPONENT FROM AN OTHER COMPONENT:

 ex. we want that: <br>
 ``app.component`` handles the function ``changeActiveStickOnSidenav()`` of ``sidenav.component`` by scrolling, then:

````
import {header.component} from '.header/header.component';
headerComponent = HeaderComponent;
this.headerComponent.hideHeader(){...} 
````

## deploy folder dist on server but page is EMPTY
SOLUTION:
in folder ``dist/portfolio-angular/index.html``
instead ``<base href="/">``
give ``<base href="/portfolio-angular/">``