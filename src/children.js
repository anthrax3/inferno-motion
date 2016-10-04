const ARR = [];

const Children = {
  map(_children, _fn, ctx) {
    let fn = _fn;
    const children = Children.toArray(_children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },
  forEach(_children, _fn, ctx) {
    let fn = _fn;
    const children = Children.toArray(_children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    children.forEach(fn);
  },
  count(_children) {
    const children = Children.toArray(_children);
    return children.length;
  },
  only(_children) {
    const children = Children.toArray(_children);
    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }
    return children[0];
  },
  toArray(children) {
    return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
  },
};

export default Children;
