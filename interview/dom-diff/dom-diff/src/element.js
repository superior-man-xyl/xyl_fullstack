class Element{
    constructor(type,props,children){
        this.type=type;
        this.props=props;
        this.children=children;
    }
}

const createElement=(type,props,children)=>{
    return new Element(type,props,children)
}

//真实 DOM 结点， DOM对象
// JSX=》VirtualDOM
const render=(domObj)=>{
    let el =document.createElement(domObj.type);
    for(let key in domObj.props){
        setAttr(el,key,domObj.props[key]);
    }

    domObj.children.forEach(child=>{
        child=(child instanceof Element)?render(child):document.createTextNode(child);
        el.appendChild(child);

    })
    return el;
}

function setAttr(node,key,value){
    switch(key){
        case 'value':
            if(node.tagName.toLowerCase()==='input'||node.tagName.toLowerCase()==='textarea'){
                node.value=value;
            }else{
                node.setAttribute(key,value);
            }
        break;
        case 'style':
            node.style.cssText=value;
        break;
        default:
            node.setAttribute(key,value)
    }
}

const renderDOM=(el,target)=>{
    target.appendChild(el);
}

export{
    createElement,
    render,
   renderDOM
}