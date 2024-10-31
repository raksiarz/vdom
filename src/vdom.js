/** @jsx h */

let foo = <div id="foo">Hello</div>

function h(nodeNames, attr, ...args) {
    let children = args.length ? [].concat(...args) : null
    return { nodeNames, attr, children}
}

function render(vnode) {
    if(vnode.split) {
        return document.createTextNode(vnode)
    }

    let n = document.createElement(vnode.nodeName)

    let a = vnode.attributes || {}
    Object.keys(a).forEach(k => n.setAttribute(k, a[k]))

    (vnode.children || []).forEach(c => n.appendChild(render(c)))

    return n
}

let dom = render(foo)

document.body.append(dom)
