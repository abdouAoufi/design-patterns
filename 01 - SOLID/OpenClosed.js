const Colors = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

const Sizes = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }

  static fiterByColor(products, color) {
    return products.filter((product) => product.color === color);
  }
}

// specification ...

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }
  isSatisfied(item) {
    if (item.color === this.color) {
      return true;
    }
    return false;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }
  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }
  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

// ? this approach is flexible .. .. .. .. .. .. ..

class BetterFilter {
  constructor(product) {
    this.product = product;
  }
  static filter(products, spec) {
    return products.filter((p) => {
      return spec.isSatisfied(p);
    });
  }
}
let apple = new Product("Apple", Colors.green, Sizes.small);
let tree = new Product("Tree", Colors.green, Sizes.medium);
let house = new Product("House", Colors.blue, Sizes.large);

let products = [apple, tree, house];
const specs = new AndSpecification(
  new ColorSpecification(Colors.green),
  new SizeSpecification(Sizes.small)
);
const resultFilter = BetterFilter.filter(products, specs);
console.log(resultFilter);
