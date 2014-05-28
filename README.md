#jsonToList

`npm install jsontolist`

```
var data = [1,2,3,4,5, [1,2,3,4], {test:'trest', juju:[4,3,2,1]},'a','b'];

console.log( toList(data) );
```
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


```
var data = { test: [1,2,3,4], juju: 'hello', 'a':1, 'b':'c', 'pupupu': { dumb: 'you' } };

console.log( toList(data) );
```
```
<ul>
    <li>test

        <ul>
            <li>1</li>

            <li>2</li>

            <li>3</li>

            <li>4</li>
        </ul>
    </li>

    <li>juju:hello</li>

    <li>a:1</li>

    <li>b:c</li>

    <li>pupupu

        <ul>
            <li>dumb:you</li>
        </ul>
    </li>
</ul>
```
