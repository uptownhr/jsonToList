#jsonToList

##Ever want to just dump your JSON for output?

```
var toList = require('jsontolist');

var data = [1,2,3,4,5, [1,2,3,4], {test:'test', juju:[4,3,2,1]},'a','b'];
console.log( toList(data) );
```

###Returns HTML List
```
<ul>
    <li>1</li>

    <li>2</li>

    <li>3</li>

    <li>4</li>

    <li>5</li>

    <li>
        <ul>
            <li>1</li>

            <li>2</li>

            <li>3</li>

            <li>4</li>
        </ul>
    </li>

    <li>
        <ul>
            <li>test:trest</li>

            <li>juju

                <ul>
                    <li>4</li>

                    <li>3</li>

                    <li>2</li>

                    <li>1</li>
                </ul>
            </li>
        </ul>
    </li>

    <li>a</li>

    <li>b</li>
</ul>
```

### HTML VIew
*   1
*   2
*   3
*   4
*   5
*      
    *   1
    *   2
    *   3
    *   4
*   
    *   test:trest
    *   juju

        *   4
        *   3
        *   2
        *   1
*   a
*   b
