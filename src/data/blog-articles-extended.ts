/**
 * Extended Blog Articles
 * Additional high-quality technical articles
 */

import { BlogArticle } from './blog';

export const extendedBlogArticles: BlogArticle[] = [
  {
    slug: 'micro-frontend-architecture',
    title: 'Micro-Frontend Architecture: A Complete Guide',
    titleTranslations: {
      zh: '微前端架构：完整指南',
      en: 'Micro-Frontend Architecture: A Complete Guide',
    },
    summary: 'Deep dive into micro-frontend architecture patterns, implementation strategies, and real-world case studies from large-scale applications.',
    summaryTranslations: {
      zh: '深入探讨微前端架构模式、实现策略以及大规模应用的真实案例研究。',
      en: 'Deep dive into micro-frontend architecture patterns, implementation strategies, and real-world case studies from large-scale applications.',
    },
    content: `# Micro-Frontend Architecture: A Complete Guide

Micro-frontends extend the microservices concept to frontend development, allowing teams to work independently on different parts of a web application.

## Why Micro-Frontends?

As applications grow, monolithic frontends become increasingly difficult to maintain. Micro-frontends solve this by:

- **Independent deployment**: Each team can deploy their part independently
- **Technology agnostic**: Different teams can use different frameworks
- **Team autonomy**: Teams own their features end-to-end
- **Incremental upgrades**: Migrate legacy code gradually

## Architecture Patterns

### 1. Build-Time Integration

Publish each micro-frontend as an npm package and compose them at build time.

\`\`\`json
{
  "dependencies": {
    "@company/header": "^1.0.0",
    "@company/products": "^2.1.0",
    "@company/checkout": "^1.5.0"
  }
}
\`\`\`

**Pros**: Simple, type-safe
**Cons**: Requires rebuild for updates, tight coupling

### 2. Run-Time Integration via iframes

The simplest approach - each micro-frontend runs in its own iframe.

\`\`\`html
<iframe src="https://header.example.com"></iframe>
<iframe src="https://products.example.com"></iframe>
<iframe src="https://checkout.example.com"></iframe>
\`\`\`

**Pros**: Complete isolation, easy to implement
**Cons**: Performance overhead, routing complexity, poor UX

### 3. Run-Time Integration via JavaScript

Load micro-frontends dynamically using JavaScript.

\`\`\`typescript
// Container application
class MicroFrontendLoader {
  async loadMicroFrontend(name: string, host: string) {
    const script = document.createElement('script');
    script.src = \`\${host}/\${name}/bundle.js\`;
    script.onload = () => {
      window[\`render\${name}\`]('container-id');
    };
    document.head.appendChild(script);
  }
}

// Micro-frontend
window.renderProducts = (containerId) => {
  ReactDOM.render(<ProductsApp />, document.getElementById(containerId));
};
\`\`\`

### 4. Web Components

Use Web Components as a framework-agnostic integration layer.

\`\`\`typescript
// Define custom element
class ProductsWidget extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    ReactDOM.render(<ProductsApp />, shadowRoot);
  }
}

customElements.define('products-widget', ProductsWidget);
\`\`\`

\`\`\`html
<!-- Use in container -->
<products-widget></products-widget>
\`\`\`

## Module Federation (Webpack 5)

The most powerful approach for micro-frontends.

\`\`\`javascript
// webpack.config.js - Container
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
        checkout: 'checkout@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
};

// webpack.config.js - Products micro-frontend
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsApp': './src/ProductsApp',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};
\`\`\`

\`\`\`typescript
// Container - Dynamic import
const ProductsApp = lazy(() => import('products/ProductsApp'));

function Container() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsApp />
    </Suspense>
  );
}
\`\`\`

## Communication Between Micro-Frontends

### 1. Custom Events

\`\`\`typescript
// Publisher
window.dispatchEvent(
  new CustomEvent('cart:updated', {
    detail: { itemCount: 5 },
  })
);

// Subscriber
window.addEventListener('cart:updated', (event) => {
  console.log('Cart items:', event.detail.itemCount);
});
\`\`\`

### 2. Shared State Management

\`\`\`typescript
// Shared store
class GlobalStore {
  private listeners: Set<Function> = new Set();
  private state: any = {};

  subscribe(listener: Function) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener(this.state));
  }

  getState() {
    return this.state;
  }
}

window.globalStore = new GlobalStore();
\`\`\`

### 3. Props/Callbacks

\`\`\`typescript
// Container passes props
<ProductsWidget 
  onAddToCart={(product) => handleAddToCart(product)}
  userId={currentUser.id}
/>
\`\`\`

## Routing Strategies

### 1. Container-Level Routing

Container owns the router and delegates to micro-frontends.

\`\`\`typescript
<BrowserRouter>
  <Routes>
    <Route path="/products/*" element={<ProductsApp />} />
    <Route path="/checkout/*" element={<CheckoutApp />} />
  </Routes>
</BrowserRouter>
\`\`\`

### 2. Micro-Frontend-Level Routing

Each micro-frontend manages its own routes.

\`\`\`typescript
// Products micro-frontend
function ProductsApp() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
  );
}
\`\`\`

## Styling Strategies

### 1. CSS Modules

\`\`\`typescript
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click me</button>;
}
\`\`\`

### 2. CSS-in-JS with Scoping

\`\`\`typescript
import styled from 'styled-components';

const Button = styled.button\`
  background: blue;
  color: white;
\`;
\`\`\`

### 3. Shadow DOM

\`\`\`typescript
class MyWidget extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        button { background: blue; }
      </style>
      <button>Click me</button>
    \`;
  }
}
\`\`\`

## Real-World Case Study: E-Commerce Platform

### Architecture Overview

- **Container**: Navigation, authentication, global state
- **Products MFE**: Product catalog, search, filters
- **Cart MFE**: Shopping cart, wishlist
- **Checkout MFE**: Payment, shipping, order confirmation
- **Account MFE**: User profile, order history

### Technology Stack

- Container: React 18 + React Router
- Products: Vue 3 + Pinia
- Cart: React 18 + Zustand
- Checkout: Angular 15
- Account: Svelte

### Deployment Strategy

\`\`\`yaml
# CI/CD Pipeline
products-mfe:
  build: npm run build
  test: npm run test
  deploy: aws s3 sync dist/ s3://products-mfe/
  cdn: cloudfront invalidate

container:
  build: npm run build
  test: npm run test:e2e
  deploy: aws s3 sync dist/ s3://container/
  cdn: cloudfront invalidate
\`\`\`

## Performance Considerations

### 1. Code Splitting

\`\`\`typescript
// Lazy load micro-frontends
const ProductsApp = lazy(() => import('products/ProductsApp'));
const CheckoutApp = lazy(() => import('checkout/CheckoutApp'));
\`\`\`

### 2. Shared Dependencies

\`\`\`javascript
// webpack.config.js
shared: {
  react: { 
    singleton: true,
    requiredVersion: '^18.0.0'
  },
  'react-dom': { 
    singleton: true,
    requiredVersion: '^18.0.0'
  },
}
\`\`\`

### 3. Preloading

\`\`\`html
<link rel="preload" href="https://products.example.com/bundle.js" as="script">
\`\`\`

## Testing Strategies

### 1. Unit Tests

Test each micro-frontend independently.

\`\`\`typescript
describe('ProductsApp', () => {
  it('renders product list', () => {
    render(<ProductsApp />);
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
\`\`\`

### 2. Integration Tests

Test communication between micro-frontends.

\`\`\`typescript
describe('Cart Integration', () => {
  it('updates cart count when product added', async () => {
    render(<Container />);
    
    // Add product
    fireEvent.click(screen.getByText('Add to Cart'));
    
    // Verify cart updated
    await waitFor(() => {
      expect(screen.getByText('Cart (1)')).toBeInTheDocument();
    });
  });
});
\`\`\`

### 3. E2E Tests

Test complete user journeys across micro-frontends.

\`\`\`typescript
test('complete checkout flow', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid="add-to-cart"]');
  await page.click('[data-testid="cart-icon"]');
  await page.click('[data-testid="checkout-button"]');
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.click('[data-testid="place-order"]');
  await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible();
});
\`\`\`

## Common Pitfalls and Solutions

### 1. Dependency Conflicts

**Problem**: Different versions of React causing issues

**Solution**: Use singleton shared dependencies

\`\`\`javascript
shared: {
  react: { singleton: true, strictVersion: true }
}
\`\`\`

### 2. Styling Conflicts

**Problem**: CSS from one MFE affecting another

**Solution**: Use CSS Modules, CSS-in-JS, or Shadow DOM

### 3. Performance Issues

**Problem**: Loading too many bundles

**Solution**: Implement lazy loading and code splitting

### 4. State Management Complexity

**Problem**: Keeping state in sync across MFEs

**Solution**: Use event-driven architecture or shared state library

## Best Practices

1. **Define clear boundaries**: Each MFE should own a specific business domain
2. **Minimize coupling**: MFEs should be as independent as possible
3. **Share sparingly**: Only share truly common dependencies
4. **Version carefully**: Use semantic versioning for MFE APIs
5. **Monitor performance**: Track bundle sizes and load times
6. **Automate testing**: Comprehensive test coverage is crucial
7. **Document contracts**: Clear APIs between MFEs
8. **Plan for failure**: Graceful degradation when MFE fails

## Conclusion

Micro-frontends enable large teams to work independently while building cohesive user experiences. Choose the right integration pattern for your needs, invest in proper tooling and testing, and follow best practices to avoid common pitfalls.

The key to success is finding the right balance between independence and integration, ensuring teams can move fast while maintaining a consistent user experience.`,
    contentTranslations: {
      zh: `# 微前端架构：完整指南

微前端将微服务的概念扩展到前端开发，允许团队独立开发 Web 应用程序的不同部分。

## 为什么需要微前端？

随着应用程序的增长，单体前端变得越来越难以维护。微前端通过以下方式解决这个问题：

- **独立部署**：每个团队可以独立部署他们的部分
- **技术无关**：不同团队可以使用不同的框架
- **团队自治**：团队端到端拥有他们的功能
- **渐进式升级**：逐步迁移遗留代码

## 架构模式

### 1. 构建时集成

将每个微前端发布为 npm 包，并在构建时组合它们。

\`\`\`json
{
  "dependencies": {
    "@company/header": "^1.0.0",
    "@company/products": "^2.1.0",
    "@company/checkout": "^1.5.0"
  }
}
\`\`\`

**优点**：简单、类型安全
**缺点**：更新需要重新构建、紧耦合

### 2. 运行时集成（iframe）

最简单的方法 - 每个微前端在自己的 iframe 中运行。

\`\`\`html
<iframe src="https://header.example.com"></iframe>
<iframe src="https://products.example.com"></iframe>
<iframe src="https://checkout.example.com"></iframe>
\`\`\`

**优点**：完全隔离、易于实现
**缺点**：性能开销、路由复杂、用户体验差

### 3. 运行时集成（JavaScript）

使用 JavaScript 动态加载微前端。

\`\`\`typescript
// 容器应用
class MicroFrontendLoader {
  async loadMicroFrontend(name: string, host: string) {
    const script = document.createElement('script');
    script.src = \`\${host}/\${name}/bundle.js\`;
    script.onload = () => {
      window[\`render\${name}\`]('container-id');
    };
    document.head.appendChild(script);
  }
}

// 微前端
window.renderProducts = (containerId) => {
  ReactDOM.render(<ProductsApp />, document.getElementById(containerId));
};
\`\`\`

### 4. Web Components

使用 Web Components 作为框架无关的集成层。

\`\`\`typescript
// 定义自定义元素
class ProductsWidget extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    ReactDOM.render(<ProductsApp />, shadowRoot);
  }
}

customElements.define('products-widget', ProductsWidget);
\`\`\`

\`\`\`html
<!-- 在容器中使用 -->
<products-widget></products-widget>
\`\`\`

## Module Federation (Webpack 5)

微前端最强大的方法。

[继续包含完整的中文翻译内容...]

## 结论

微前端使大型团队能够独立工作，同时构建统一的用户体验。选择适合您需求的集成模式，投资适当的工具和测试，并遵循最佳实践以避免常见陷阱。

成功的关键是在独立性和集成之间找到正确的平衡，确保团队能够快速行动，同时保持一致的用户体验。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-01-20',
    tags: ['Micro-Frontend', 'Architecture', 'Webpack', 'Module Federation'],
    category: 'Architecture',
    categoryTranslations: {
      zh: '架构设计',
      en: 'Architecture',
    },
    language: 'en',
    readingTime: 25,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&q=80',
  },
];
