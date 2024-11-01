/** @jsx h */

const number = 6

let num = <div id="foo">{ number }</div>
let str = <div><div id="foo">Hello</div></div>
const items = ['foo', 'bar', 'baz']

function item(text) {
    return <li>{ text }</li>
}

let list = render(
    <ul>
        { items.map(item) } 
    </ul>
)

function h(nodeName, attr, ...args) {
    let children = args.length ? [].concat(...args) : null
    return { nodeName, attr, children}
}

function render(vnode) {
    if(vnode.split || typeof vnode === 'number') {
        return document.createTextNode(vnode)
    }

    let n = document.createElement(vnode.nodeName)

    let a = vnode.attr || {}
    Object.keys(a).forEach(k => n.setAttribute(k, a[k]));

    (vnode.children || []).forEach(c => n.appendChild(render(c)))

    return n
}

let dom = render(str)
let domnum = render(num)

document.body.append(dom)
document.body.append(domnum)
document.body.append(list)
