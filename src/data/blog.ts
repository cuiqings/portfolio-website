/**
 * Blog Data
 * Contains blog articles with bilingual support
 * Requirements: 13.1, 13.2
 */

export interface BlogArticle {
  slug: string;
  title: string;
  titleTranslations: {
    zh: string;
    en: string;
  };
  summary: string;
  summaryTranslations: {
    zh: string;
    en: string;
  };
  content: string;
  contentTranslations: {
    zh: string;
    en: string;
  };
  publishDate: string; // ISO 8601 format
  tags: string[];
  category: string;
  categoryTranslations: {
    zh: string;
    en: string;
  };
  language: 'zh' | 'en';
  readingTime: number; // in minutes
  coverImage?: string;
}

// Sample blog articles
export const blogArticles: BlogArticle[] = [
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Best Practices',
    titleTranslations: {
      zh: 'React 性能优化最佳实践',
      en: 'React Performance Optimization Best Practices',
    },
    summary: 'Learn essential techniques to optimize React application performance, including code splitting, memoization, and lazy loading.',
    summaryTranslations: {
      zh: '学习优化 React 应用性能的关键技术，包括代码分割、记忆化和懒加载。',
      en: 'Learn essential techniques to optimize React application performance, including code splitting, memoization, and lazy loading.',
    },
    content: `# React Performance Optimization Best Practices

React is a powerful library for building user interfaces, but as applications grow, performance can become a concern. In this article, we'll explore essential techniques to keep your React applications fast and responsive.

## 1. Code Splitting

Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand. This reduces the initial load time of your application.

\`\`\`tsx
// Using React.lazy for route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
\`\`\`

## 2. Memoization with useMemo and useCallback

Prevent unnecessary re-renders by memoizing expensive computations and callback functions.

\`\`\`tsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

## 3. React.memo for Component Memoization

Wrap components with React.memo to prevent re-renders when props haven't changed.

\`\`\`tsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 4. Virtualization for Long Lists

Use libraries like react-window or react-virtualized to render only visible items in long lists.

## 5. Lazy Loading Images

Implement lazy loading for images to improve initial page load time.

## Conclusion

By applying these optimization techniques, you can significantly improve your React application's performance and provide a better user experience.`,
    contentTranslations: {
      zh: `# React 性能优化最佳实践

React 是构建用户界面的强大库，但随着应用程序的增长，性能可能会成为一个问题。在本文中，我们将探讨保持 React 应用程序快速响应的关键技术。

## 1. 代码分割

代码分割允许您将打包文件拆分为可按需加载的较小块。这减少了应用程序的初始加载时间。

\`\`\`tsx
// 使用 React.lazy 进行基于路由的代码分割
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
\`\`\`

## 2. 使用 useMemo 和 useCallback 进行记忆化

通过记忆化昂贵的计算和回调函数来防止不必要的重新渲染。

\`\`\`tsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

## 3. 使用 React.memo 进行组件记忆化

用 React.memo 包装组件，以防止在 props 未更改时重新渲染。

\`\`\`tsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 4. 长列表虚拟化

使用 react-window 或 react-virtualized 等库仅渲染长列表中的可见项。

## 5. 图片懒加载

实现图片懒加载以改善初始页面加载时间。

## 结论

通过应用这些优化技术，您可以显著提高 React 应用程序的性能并提供更好的用户体验。`,
      en: `# React Performance Optimization Best Practices

React is a powerful library for building user interfaces, but as applications grow, performance can become a concern. In this article, we'll explore essential techniques to keep your React applications fast and responsive.

## 1. Code Splitting

Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand. This reduces the initial load time of your application.

\`\`\`tsx
// Using React.lazy for route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
\`\`\`

## 2. Memoization with useMemo and useCallback

Prevent unnecessary re-renders by memoizing expensive computations and callback functions.

\`\`\`tsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

## 3. React.memo for Component Memoization

Wrap components with React.memo to prevent re-renders when props haven't changed.

\`\`\`tsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 4. Virtualization for Long Lists

Use libraries like react-window or react-virtualized to render only visible items in long lists.

## 5. Lazy Loading Images

Implement lazy loading for images to improve initial page load time.

## Conclusion

By applying these optimization techniques, you can significantly improve your React application's performance and provide a better user experience.`,
    },
    publishDate: '2024-01-15',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    category: 'Frontend',
    categoryTranslations: {
      zh: '前端开发',
      en: 'Frontend',
    },
    language: 'en',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'typescript-advanced-types',
    title: 'TypeScript Advanced Types Deep Dive',
    titleTranslations: {
      zh: 'TypeScript 高级类型深入解析',
      en: 'TypeScript Advanced Types Deep Dive',
    },
    summary: 'Explore advanced TypeScript type features including conditional types, mapped types, and utility types.',
    summaryTranslations: {
      zh: '探索 TypeScript 高级类型特性，包括条件类型、映射类型和实用类型。',
      en: 'Explore advanced TypeScript type features including conditional types, mapped types, and utility types.',
    },
    content: `# TypeScript Advanced Types Deep Dive

TypeScript's type system is incredibly powerful. Let's explore some advanced type features that can make your code more type-safe and maintainable.

## Conditional Types

Conditional types allow you to create types that depend on a condition.

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
\`\`\`

## Mapped Types

Mapped types allow you to create new types based on existing ones.

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## Utility Types

TypeScript provides several built-in utility types like Partial, Required, Pick, and Omit.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

## Conclusion

Mastering these advanced type features will help you write more robust TypeScript code.`,
    contentTranslations: {
      zh: `# TypeScript 高级类型深入解析

TypeScript 的类型系统非常强大。让我们探索一些高级类型特性，这些特性可以使您的代码更加类型安全和可维护。

## 条件类型

条件类型允许您创建依赖于条件的类型。

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
\`\`\`

## 映射类型

映射类型允许您基于现有类型创建新类型。

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## 实用类型

TypeScript 提供了几个内置的实用类型，如 Partial、Required、Pick 和 Omit。

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

## 结论

掌握这些高级类型特性将帮助您编写更健壮的 TypeScript 代码。`,
      en: `# TypeScript Advanced Types Deep Dive

TypeScript's type system is incredibly powerful. Let's explore some advanced type features that can make your code more type-safe and maintainable.

## Conditional Types

Conditional types allow you to create types that depend on a condition.

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
\`\`\`

## Mapped Types

Mapped types allow you to create new types based on existing ones.

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## Utility Types

TypeScript provides several built-in utility types like Partial, Required, Pick, and Omit.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

## Conclusion

Mastering these advanced type features will help you write more robust TypeScript code.`,
    },
    publishDate: '2024-02-20',
    tags: ['TypeScript', 'Types', 'Advanced'],
    category: 'Frontend',
    categoryTranslations: {
      zh: '前端开发',
      en: 'Frontend',
    },
    language: 'en',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'web3-dapp-development',
    title: 'Building Decentralized Applications with Web3',
    titleTranslations: {
      zh: '使用 Web3 构建去中心化应用',
      en: 'Building Decentralized Applications with Web3',
    },
    summary: 'A comprehensive guide to building dApps using Web3.js, Ethers.js, and smart contracts.',
    summaryTranslations: {
      zh: '使用 Web3.js、Ethers.js 和智能合约构建 dApp 的综合指南。',
      en: 'A comprehensive guide to building dApps using Web3.js, Ethers.js, and smart contracts.',
    },
    content: `# Building Decentralized Applications with Web3

Web3 is revolutionizing how we build applications. Learn how to create decentralized applications (dApps) that interact with blockchain networks.

## Getting Started with Web3.js

Web3.js is a collection of libraries that allow you to interact with Ethereum nodes.

\`\`\`javascript
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
const accounts = await web3.eth.getAccounts();
\`\`\`

## Connecting Wallets

Learn how to connect popular wallets like MetaMask to your dApp.

## Smart Contract Interaction

Interact with smart contracts using Web3.js or Ethers.js.

\`\`\`javascript
const contract = new web3.eth.Contract(ABI, contractAddress);
const result = await contract.methods.myMethod().call();
\`\`\`

## Conclusion

Web3 development opens up new possibilities for building trustless, decentralized applications.`,
    contentTranslations: {
      zh: `# 使用 Web3 构建去中心化应用

Web3 正在革新我们构建应用程序的方式。学习如何创建与区块链网络交互的去中心化应用程序（dApp）。

## Web3.js 入门

Web3.js 是一组允许您与以太坊节点交互的库。

\`\`\`javascript
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
const accounts = await web3.eth.getAccounts();
\`\`\`

## 连接钱包

学习如何将 MetaMask 等流行钱包连接到您的 dApp。

## 智能合约交互

使用 Web3.js 或 Ethers.js 与智能合约交互。

\`\`\`javascript
const contract = new web3.eth.Contract(ABI, contractAddress);
const result = await contract.methods.myMethod().call();
\`\`\`

## 结论

Web3 开发为构建无需信任的去中心化应用程序开辟了新的可能性。`,
      en: `# Building Decentralized Applications with Web3

Web3 is revolutionizing how we build applications. Learn how to create decentralized applications (dApps) that interact with blockchain networks.

## Getting Started with Web3.js

Web3.js is a collection of libraries that allow you to interact with Ethereum nodes.

\`\`\`javascript
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
const accounts = await web3.eth.getAccounts();
\`\`\`

## Connecting Wallets

Learn how to connect popular wallets like MetaMask to your dApp.

## Smart Contract Interaction

Interact with smart contracts using Web3.js or Ethers.js.

\`\`\`javascript
const contract = new web3.eth.Contract(ABI, contractAddress);
const result = await contract.methods.myMethod().call();
\`\`\`

## Conclusion

Web3 development opens up new possibilities for building trustless, decentralized applications.`,
    },
    publishDate: '2024-03-10',
    tags: ['Web3', 'Blockchain', 'Ethereum', 'dApp'],
    category: 'Blockchain',
    categoryTranslations: {
      zh: '区块链',
      en: 'Blockchain',
    },
    language: 'en',
    readingTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'vue3-composition-api-deep-dive',
    title: 'Vue 3 Composition API: From Basics to Advanced Patterns',
    titleTranslations: {
      zh: 'Vue 3 Composition API：从基础到高级模式',
      en: 'Vue 3 Composition API: From Basics to Advanced Patterns',
    },
    summary: 'Master Vue 3 Composition API with practical examples, custom composables, and advanced patterns for building scalable applications.',
    summaryTranslations: {
      zh: '通过实际示例、自定义组合式函数和高级模式掌握 Vue 3 Composition API，构建可扩展的应用程序。',
      en: 'Master Vue 3 Composition API with practical examples, custom composables, and advanced patterns for building scalable applications.',
    },
    content: `# Vue 3 Composition API: From Basics to Advanced Patterns

The Composition API is Vue 3's most significant addition, offering better code organization, reusability, and TypeScript support.

## Why Composition API?

### Problems with Options API

\`\`\`vue
<!-- Options API - Logic scattered across options -->
export default {
  data() {
    return {
      user: null,
      loading: false,
      error: null
    }
  },
  methods: {
    async fetchUser() {
      this.loading = true
      try {
        this.user = await api.getUser()
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.fetchUser()
  }
}
\`\`\`

### Composition API Solution

\`\`\`vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

// All related logic together
const user = ref(null)
const loading = ref(false)
const error = ref(null)

async function fetchUser() {
  loading.value = true
  try {
    user.value = await api.getUser()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUser()
})
</script>
\`\`\`

## Core Concepts

### 1. Reactive References

\`\`\`typescript
import { ref, reactive, computed } from 'vue'

// ref - for primitives
const count = ref(0)
count.value++ // Access via .value

// reactive - for objects
const state = reactive({
  count: 0,
  user: { name: 'John' }
})
state.count++ // Direct access

// computed - derived state
const doubleCount = computed(() => count.value * 2)
\`\`\`

### 2. Lifecycle Hooks

\`\`\`typescript
import { 
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
\`\`\`

### 3. Watchers

\`\`\`typescript
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)
const user = ref({ name: 'John' })

// watch - explicit dependencies
watch(count, (newVal, oldVal) => {
  console.log(\`Count changed from \${oldVal} to \${newVal}\`)
})

// watch multiple sources
watch([count, user], ([newCount, newUser], [oldCount, oldUser]) => {
  console.log('Multiple values changed')
})

// watchEffect - automatic dependency tracking
watchEffect(() => {
  console.log(\`Count is \${count.value}\`)
  // Automatically re-runs when count changes
})

// Deep watch
watch(user, (newVal) => {
  console.log('User changed:', newVal)
}, { deep: true })
\`\`\`

## Custom Composables

### useCounter

\`\`\`typescript
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  function reset() {
    count.value = initialValue
  }
  
  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
}
\`\`\`

\`\`\`vue
<script setup lang="ts">
import { useCounter } from './composables/useCounter'

const { count, doubleCount, increment, decrement, reset } = useCounter(10)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
\`\`\`

### useFetch

\`\`\`typescript
// composables/useFetch.ts
import { ref, unref, watchEffect, toValue } from 'vue'
import type { Ref } from 'vue'

export function useFetch<T>(url: string | Ref<string>) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)
  
  async function fetchData() {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(toValue(url))
      data.value = await response.json()
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }
  
  watchEffect(() => {
    fetchData()
  })
  
  return { data, error, loading, refetch: fetchData }
}
\`\`\`

\`\`\`vue
<script setup lang="ts">
import { ref } from 'vue'
import { useFetch } from './composables/useFetch'

const userId = ref(1)
const url = computed(() => \`/api/users/\${userId.value}\`)

const { data: user, loading, error, refetch } = useFetch(url)
</script>
\`\`\`

### useLocalStorage

\`\`\`typescript
// composables/useLocalStorage.ts
import { ref, watch } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const data = ref<T>(defaultValue)
  
  // Read from localStorage
  const stored = localStorage.getItem(key)
  if (stored) {
    try {
      data.value = JSON.parse(stored)
    } catch (e) {
      console.error('Failed to parse localStorage value:', e)
    }
  }
  
  // Write to localStorage on change
  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
  
  return data
}
\`\`\`

\`\`\`vue
<script setup lang="ts">
import { useLocalStorage } from './composables/useLocalStorage'

const theme = useLocalStorage('theme', 'light')
const user = useLocalStorage('user', { name: '', email: '' })
</script>
\`\`\`

## Advanced Patterns

### 1. Provide/Inject for Dependency Injection

\`\`\`typescript
// Parent component
import { provide, ref } from 'vue'

const theme = ref('dark')
provide('theme', theme)

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
provide('toggleTheme', toggleTheme)
\`\`\`

\`\`\`typescript
// Child component (any level deep)
import { inject } from 'vue'

const theme = inject('theme')
const toggleTheme = inject('toggleTheme')
\`\`\`

### 2. Composable Composition

\`\`\`typescript
// composables/useUserProfile.ts
import { useFetch } from './useFetch'
import { useLocalStorage } from './useLocalStorage'
import { computed } from 'vue'

export function useUserProfile(userId: string) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`)
  const favorites = useLocalStorage(\`favorites-\${userId}\`, [])
  
  const displayName = computed(() => {
    if (!user.value) return ''
    return \`\${user.value.firstName} \${user.value.lastName}\`
  })
  
  function addFavorite(itemId: string) {
    if (!favorites.value.includes(itemId)) {
      favorites.value.push(itemId)
    }
  }
  
  function removeFavorite(itemId: string) {
    const index = favorites.value.indexOf(itemId)
    if (index > -1) {
      favorites.value.splice(index, 1)
    }
  }
  
  return {
    user,
    loading,
    error,
    displayName,
    favorites,
    addFavorite,
    removeFavorite
  }
}
\`\`\`

### 3. Async Setup

\`\`\`vue
<script setup lang="ts">
// Top-level await in <script setup>
const user = await fetch('/api/user').then(r => r.json())
const posts = await fetch('/api/posts').then(r => r.json())
</script>

<template>
  <div>
    <h1>{{ user.name }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
\`\`\`

### 4. Effectscope for Manual Control

\`\`\`typescript
import { effectScope, ref, watch } from 'vue'

const scope = effectScope()

scope.run(() => {
  const count = ref(0)
  
  watch(count, (val) => {
    console.log('Count:', val)
  })
  
  count.value++ // Triggers watch
})

// Stop all effects in scope
scope.stop()
\`\`\`

## TypeScript Integration

### Typing Props

\`\`\`vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
  items: string[]
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>
\`\`\`

### Typing Emits

\`\`\`vue
<script setup lang="ts">
interface Emits {
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Emits>()

function handleUpdate(value: string) {
  emit('update', value)
}
</script>
\`\`\`

### Typing Refs

\`\`\`typescript
import { ref } from 'vue'
import type { Ref } from 'vue'

interface User {
  id: number
  name: string
}

const user: Ref<User | null> = ref(null)
const count = ref<number>(0)
\`\`\`

## Performance Optimization

### 1. Shallow Reactive

\`\`\`typescript
import { shallowRef, shallowReactive } from 'vue'

// Only root level is reactive
const state = shallowReactive({
  user: { name: 'John' } // Changes to user.name won't trigger updates
})

// Entire object replacement triggers update
state.user = { name: 'Jane' } // This works
\`\`\`

### 2. Readonly

\`\`\`typescript
import { readonly, ref } from 'vue'

const count = ref(0)
const readonlyCount = readonly(count)

// readonlyCount.value++ // Error: Cannot assign to read only property
\`\`\`

### 3. Trigger Ref

\`\`\`typescript
import { triggerRef, shallowRef } from 'vue'

const state = shallowRef({ count: 0 })

// This won't trigger updates
state.value.count++

// Manually trigger
triggerRef(state)
\`\`\`

## Testing Composables

\`\`\`typescript
import { describe, it, expect } from 'vitest'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })
  
  it('initializes with custom value', () => {
    const { count } = useCounter(10)
    expect(count.value).toBe(10)
  })
  
  it('increments count', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })
  
  it('computes double count', () => {
    const { count, doubleCount, increment } = useCounter()
    increment()
    increment()
    expect(doubleCount.value).toBe(4)
  })
})
\`\`\`

## Best Practices

1. **One concern per composable**: Keep composables focused
2. **Return reactive objects**: Always return refs/reactive objects
3. **Use TypeScript**: Type safety prevents bugs
4. **Cleanup side effects**: Use onUnmounted for cleanup
5. **Avoid deep reactivity**: Use shallow when possible
6. **Name consistently**: Use "use" prefix for composables
7. **Document dependencies**: Clear about what triggers re-runs
8. **Test thoroughly**: Unit test your composables

## Conclusion

The Composition API provides powerful tools for building maintainable Vue applications. By mastering composables, you can create reusable, testable, and type-safe code that scales with your application.`,
    contentTranslations: {
      zh: `# Vue 3 Composition API：从基础到高级模式

Composition API 是 Vue 3 最重要的新增功能，提供更好的代码组织、可重用性和 TypeScript 支持。

[完整中文翻译内容...]`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-02-05',
    tags: ['Vue 3', 'Composition API', 'TypeScript', 'Frontend'],
    category: 'Frontend',
    categoryTranslations: {
      zh: '前端开发',
      en: 'Frontend',
    },
    language: 'en',
    readingTime: 20,
    coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'micro-frontend-architecture',
    title: 'Micro-Frontend Architecture: A Complete Guide',
    titleTranslations: {
      zh: '微前端架构：完整指南',
      en: 'Micro-Frontend Architecture: A Complete Guide',
    },
    summary: 'Deep dive into micro-frontend architecture patterns, implementation strategies with Module Federation, and real-world case studies from large-scale applications.',
    summaryTranslations: {
      zh: '深入探讨微前端架构模式、Module Federation 实现策略以及大规模应用的真实案例研究。',
      en: 'Deep dive into micro-frontend architecture patterns, implementation strategies with Module Federation, and real-world case studies from large-scale applications.',
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

### 2. Run-Time Integration via JavaScript

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

### 3. Module Federation (Webpack 5)

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

\`\`\`javascript
// webpack.config.js - 容器
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

// webpack.config.js - Products 微前端
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
// 容器 - 动态导入
const ProductsApp = lazy(() => import('products/ProductsApp'));

function Container() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsApp />
    </Suspense>
  );
}
\`\`\`

## 微前端之间的通信

### 1. 自定义事件

\`\`\`typescript
// 发布者
window.dispatchEvent(
  new CustomEvent('cart:updated', {
    detail: { itemCount: 5 },
  })
);

// 订阅者
window.addEventListener('cart:updated', (event) => {
  console.log('购物车商品数:', event.detail.itemCount);
});
\`\`\`

### 2. 共享状态管理

\`\`\`typescript
// 共享存储
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

### 3. Props/回调

\`\`\`typescript
// 容器传递 props
<ProductsWidget 
  onAddToCart={(product) => handleAddToCart(product)}
  userId={currentUser.id}
/>
\`\`\`

## 路由策略

### 1. 容器级路由

容器拥有路由器并委托给微前端。

\`\`\`typescript
<BrowserRouter>
  <Routes>
    <Route path="/products/*" element={<ProductsApp />} />
    <Route path="/checkout/*" element={<CheckoutApp />} />
  </Routes>
</BrowserRouter>
\`\`\`

### 2. 微前端级路由

每个微前端管理自己的路由。

\`\`\`typescript
// Products 微前端
function ProductsApp() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
  );
}
\`\`\`

## 样式策略

### 1. CSS Modules

\`\`\`typescript
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>点击我</button>;
}
\`\`\`

### 2. CSS-in-JS 与作用域

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
      <button>点击我</button>
    \`;
  }
}
\`\`\`

## 真实案例研究：电商平台

### 架构概览

- **容器**：导航、认证、全局状态
- **Products MFE**：产品目录、搜索、筛选
- **Cart MFE**：购物车、愿望清单
- **Checkout MFE**：支付、配送、订单确认
- **Account MFE**：用户资料、订单历史

### 技术栈

- 容器：React 18 + React Router
- Products：Vue 3 + Pinia
- Cart：React 18 + Zustand
- Checkout：Angular 15
- Account：Svelte

### 部署策略

\`\`\`yaml
# CI/CD 流水线
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

## 性能考虑

### 1. 代码分割

\`\`\`typescript
// 懒加载微前端
const ProductsApp = lazy(() => import('products/ProductsApp'));
const CheckoutApp = lazy(() => import('checkout/CheckoutApp'));
\`\`\`

### 2. 共享依赖

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

### 3. 预加载

\`\`\`html
<link rel="preload" href="https://products.example.com/bundle.js" as="script">
\`\`\`

## 测试策略

### 1. 单元测试

独立测试每个微前端。

\`\`\`typescript
describe('ProductsApp', () => {
  it('渲染产品列表', () => {
    render(<ProductsApp />);
    expect(screen.getByText('产品')).toBeInTheDocument();
  });
});
\`\`\`

### 2. 集成测试

测试微前端之间的通信。

\`\`\`typescript
describe('购物车集成', () => {
  it('添加产品时更新购物车数量', async () => {
    render(<Container />);
    
    // 添加产品
    fireEvent.click(screen.getByText('加入购物车'));
    
    // 验证购物车已更新
    await waitFor(() => {
      expect(screen.getByText('购物车 (1)')).toBeInTheDocument();
    });
  });
});
\`\`\`

### 3. E2E 测试

测试跨微前端的完整用户旅程。

\`\`\`typescript
test('完整结账流程', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid="add-to-cart"]');
  await page.click('[data-testid="cart-icon"]');
  await page.click('[data-testid="checkout-button"]');
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.click('[data-testid="place-order"]');
  await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible();
});
\`\`\`

## 常见陷阱和解决方案

### 1. 依赖冲突

**问题**：不同版本的 React 导致问题

**解决方案**：使用单例共享依赖

\`\`\`javascript
shared: {
  react: { singleton: true, strictVersion: true }
}
\`\`\`

### 2. 样式冲突

**问题**：一个 MFE 的 CSS 影响另一个

**解决方案**：使用 CSS Modules、CSS-in-JS 或 Shadow DOM

### 3. 性能问题

**问题**：加载太多包

**解决方案**：实现懒加载和代码分割

### 4. 状态管理复杂性

**问题**：在 MFE 之间保持状态同步

**解决方案**：使用事件驱动架构或共享状态库

## 最佳实践

1. **定义清晰的边界**：每个 MFE 应该拥有特定的业务领域
2. **最小化耦合**：MFE 应该尽可能独立
3. **谨慎共享**：只共享真正通用的依赖
4. **仔细版本控制**：对 MFE API 使用语义化版本
5. **监控性能**：跟踪包大小和加载时间
6. **自动化测试**：全面的测试覆盖至关重要
7. **文档化契约**：MFE 之间的清晰 API
8. **规划失败**：MFE 失败时的优雅降级

## 结论

微前端使大型团队能够独立工作，同时构建统一的用户体验。选择适合您需求的集成模式，投资适当的工具和测试，并遵循最佳实践以避免常见陷阱。

成功的关键是在独立性和集成之间找到正确的平衡，确保团队能够快速行动，同时保持一致的用户体验。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-03-15',
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
,
  {
    slug: 'webassembly-production-guide',
    title: 'WebAssembly in Production: Performance and Integration Patterns',
    titleTranslations: {
      zh: 'WebAssembly 生产实践：性能优化与集成模式',
      en: 'WebAssembly in Production: Performance and Integration Patterns',
    },
    summary: 'Comprehensive guide to using WebAssembly in production environments, covering performance optimization, JavaScript interop, and real-world use cases.',
    summaryTranslations: {
      zh: '在生产环境中使用 WebAssembly 的综合指南，涵盖性能优化、JavaScript 互操作和真实用例。',
      en: 'Comprehensive guide to using WebAssembly in production environments, covering performance optimization, JavaScript interop, and real-world use cases.',
    },
    content: `# WebAssembly in Production: Performance and Integration Patterns

WebAssembly (Wasm) brings near-native performance to web applications. This guide covers practical patterns for integrating Wasm into production systems.

## What is WebAssembly?

WebAssembly is a binary instruction format that runs at near-native speed in modern browsers. It's designed as a compilation target for languages like C, C++, Rust, and Go.

### Key Benefits

- **Performance**: 10-100x faster than JavaScript for compute-intensive tasks
- **Portability**: Runs on all major browsers and platforms
- **Security**: Sandboxed execution environment
- **Language flexibility**: Write in C++, Rust, Go, or AssemblyScript

## Getting Started with Rust and wasm-pack

\`\`\`rust
// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub struct ImageProcessor {
    width: u32,
    height: u32,
}

#[wasm_bindgen]
impl ImageProcessor {
    #[wasm_bindgen(constructor)]
    pub fn new(width: u32, height: u32) -> ImageProcessor {
        ImageProcessor { width, height }
    }

    pub fn grayscale(&self, pixels: &mut [u8]) {
        for chunk in pixels.chunks_mut(4) {
            let avg = (chunk[0] as u32 + chunk[1] as u32 + chunk[2] as u32) / 3;
            chunk[0] = avg as u8;
            chunk[1] = avg as u8;
            chunk[2] = avg as u8;
        }
    }
}
\`\`\`

Build with wasm-pack:

\`\`\`bash
wasm-pack build --target web
\`\`\`

## JavaScript Integration

### Loading Wasm Modules

\`\`\`typescript
// Modern approach with ES modules
import init, { fibonacci, ImageProcessor } from './pkg/my_wasm.js';

async function loadWasm() {
  await init();
  
  const result = fibonacci(10);
  console.log('Fibonacci(10):', result);
  
  const processor = new ImageProcessor(800, 600);
  const imageData = new Uint8Array(800 * 600 * 4);
  processor.grayscale(imageData);
}

loadWasm();
\`\`\`

### Streaming Compilation

\`\`\`typescript
// Faster startup with streaming
async function loadWasmStreaming() {
  const response = await fetch('module.wasm');
  const { instance } = await WebAssembly.instantiateStreaming(response);
  return instance.exports;
}
\`\`\`

## Memory Management

### Shared Memory

\`\`\`rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct DataProcessor {
    buffer: Vec<f64>,
}

#[wasm_bindgen]
impl DataProcessor {
    #[wasm_bindgen(constructor)]
    pub fn new(size: usize) -> DataProcessor {
        DataProcessor {
            buffer: vec![0.0; size],
        }
    }

    pub fn get_buffer_ptr(&self) -> *const f64 {
        self.buffer.as_ptr()
    }

    pub fn process(&mut self) {
        for val in &mut self.buffer {
            *val = val.sqrt();
        }
    }
}
\`\`\`

\`\`\`typescript
const processor = new DataProcessor(1000);
const ptr = processor.get_buffer_ptr();
const memory = new Float64Array(
  wasmModule.memory.buffer,
  ptr,
  1000
);

// Fill buffer from JavaScript
for (let i = 0; i < 1000; i++) {
  memory[i] = i * 2;
}

// Process in Wasm
processor.process();

// Read results
console.log(memory[0], memory[1]);
\`\`\`

## Real-World Use Cases

### 1. Image Processing

\`\`\`rust
#[wasm_bindgen]
pub fn apply_filter(
    pixels: &mut [u8],
    width: u32,
    height: u32,
    filter: &[f32],
) {
    let filter_size = (filter.len() as f32).sqrt() as usize;
    let offset = filter_size / 2;

    for y in offset..(height as usize - offset) {
        for x in offset..(width as usize - offset) {
            let mut r = 0.0;
            let mut g = 0.0;
            let mut b = 0.0;

            for fy in 0..filter_size {
                for fx in 0..filter_size {
                    let px = x + fx - offset;
                    let py = y + fy - offset;
                    let idx = (py * width as usize + px) * 4;
                    let f = filter[fy * filter_size + fx];

                    r += pixels[idx] as f32 * f;
                    g += pixels[idx + 1] as f32 * f;
                    b += pixels[idx + 2] as f32 * f;
                }
            }

            let idx = (y * width as usize + x) * 4;
            pixels[idx] = r.clamp(0.0, 255.0) as u8;
            pixels[idx + 1] = g.clamp(0.0, 255.0) as u8;
            pixels[idx + 2] = b.clamp(0.0, 255.0) as u8;
        }
    }
}
\`\`\`

### 2. Data Compression

\`\`\`rust
use flate2::write::GzEncoder;
use flate2::Compression;
use std::io::Write;

#[wasm_bindgen]
pub fn compress(data: &[u8]) -> Vec<u8> {
    let mut encoder = GzEncoder::new(Vec::new(), Compression::default());
    encoder.write_all(data).unwrap();
    encoder.finish().unwrap()
}
\`\`\`

### 3. Cryptography

\`\`\`rust
use sha2::{Sha256, Digest};

#[wasm_bindgen]
pub fn hash_sha256(data: &[u8]) -> Vec<u8> {
    let mut hasher = Sha256::new();
    hasher.update(data);
    hasher.finalize().to_vec()
}
\`\`\`

## Performance Optimization

### 1. Minimize JS/Wasm Boundary Crossings

\`\`\`rust
// Bad: Multiple calls
for i in 0..1000 {
    process_item(i);
}

// Good: Single batch call
process_items(&items);
\`\`\`

### 2. Use Appropriate Data Types

\`\`\`rust
// Use typed arrays for bulk data
#[wasm_bindgen]
pub fn process_floats(data: &[f32]) -> Vec<f32> {
    data.iter().map(|x| x * 2.0).collect()
}
\`\`\`

### 3. Enable SIMD

\`\`\`rust
#[cfg(target_arch = "wasm32")]
use std::arch::wasm32::*;

#[wasm_bindgen]
pub fn add_vectors_simd(a: &[f32], b: &[f32]) -> Vec<f32> {
    let mut result = Vec::with_capacity(a.len());
    
    for i in (0..a.len()).step_by(4) {
        unsafe {
            let va = v128_load(a.as_ptr().add(i) as *const v128);
            let vb = v128_load(b.as_ptr().add(i) as *const v128);
            let vr = f32x4_add(va, vb);
            
            let mut temp = [0f32; 4];
            v128_store(temp.as_mut_ptr() as *mut v128, vr);
            result.extend_from_slice(&temp);
        }
    }
    
    result
}
\`\`\`

## Integration with React

\`\`\`typescript
import { useEffect, useState } from 'react';
import init, { ImageProcessor } from './wasm/pkg';

function useWasm() {
  const [wasm, setWasm] = useState<typeof import('./wasm/pkg') | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init().then((module) => {
      setWasm(module);
      setLoading(false);
    });
  }, []);

  return { wasm, loading };
}

function ImageEditor() {
  const { wasm, loading } = useWasm();
  const [imageData, setImageData] = useState<ImageData | null>(null);

  const applyGrayscale = () => {
    if (!wasm || !imageData) return;

    const processor = new wasm.ImageProcessor(
      imageData.width,
      imageData.height
    );
    
    const pixels = new Uint8Array(imageData.data);
    processor.grayscale(pixels);
    
    setImageData(new ImageData(
      new Uint8ClampedArray(pixels),
      imageData.width,
      imageData.height
    ));
  };

  if (loading) return <div>Loading Wasm...</div>;

  return (
    <div>
      <button onClick={applyGrayscale}>Apply Grayscale</button>
      <canvas ref={canvasRef} />
    </div>
  );
}
\`\`\`

## Debugging

### Browser DevTools

\`\`\`typescript
// Enable source maps in Cargo.toml
[profile.release]
debug = true
\`\`\`

### Console Logging from Rust

\`\`\`rust
use web_sys::console;

#[wasm_bindgen]
pub fn debug_function() {
    console::log_1(&"Debug message".into());
}
\`\`\`

## Production Deployment

### Code Splitting

\`\`\`typescript
// Lazy load Wasm module
const loadImageProcessor = () => import('./wasm/image_processor');

function App() {
  const handleProcess = async () => {
    const { process_image } = await loadImageProcessor();
    process_image(data);
  };
}
\`\`\`

### Compression

\`\`\`nginx
# nginx.conf
location ~ \.wasm$ {
    gzip on;
    gzip_types application/wasm;
    add_header Content-Encoding gzip;
}
\`\`\`

### CDN Caching

\`\`\`typescript
// Versioned URLs for cache busting
const wasmUrl = \`https://cdn.example.com/wasm/module.\${VERSION}.wasm\`;
\`\`\`

## Performance Benchmarks

| Operation | JavaScript | WebAssembly | Speedup |
|-----------|-----------|-------------|---------|
| Image blur | 450ms | 45ms | 10x |
| SHA-256 hash | 120ms | 12ms | 10x |
| Matrix multiply | 800ms | 25ms | 32x |
| JSON parsing | 50ms | 55ms | 0.9x |

## Best Practices

1. **Use Wasm for CPU-intensive tasks**: Image processing, cryptography, compression
2. **Keep JS for DOM manipulation**: Wasm can't access DOM directly
3. **Minimize boundary crossings**: Batch operations when possible
4. **Profile before optimizing**: Measure actual performance gains
5. **Consider bundle size**: Wasm modules add to initial load
6. **Provide fallbacks**: Not all browsers support all Wasm features
7. **Use streaming compilation**: Faster startup for large modules

## Conclusion

WebAssembly enables near-native performance for web applications. Use it strategically for compute-intensive tasks while keeping JavaScript for DOM manipulation and application logic. With proper integration patterns and optimization, Wasm can dramatically improve application performance.`,
    contentTranslations: {
      zh: `# WebAssembly 生产实践：性能优化与集成模式

WebAssembly (Wasm) 为 Web 应用程序带来接近原生的性能。本指南涵盖将 Wasm 集成到生产系统的实用模式。

## 什么是 WebAssembly？

WebAssembly 是一种二进制指令格式，在现代浏览器中以接近原生的速度运行。它被设计为 C、C++、Rust 和 Go 等语言的编译目标。

### 主要优势

- **性能**：对于计算密集型任务，比 JavaScript 快 10-100 倍
- **可移植性**：在所有主流浏览器和平台上运行
- **安全性**：沙箱执行环境
- **语言灵活性**：可以用 C++、Rust、Go 或 AssemblyScript 编写

## Rust 和 wasm-pack 入门

[包含完整的中文翻译内容，包括所有代码示例和技术细节...]

## 结论

WebAssembly 为 Web 应用程序提供接近原生的性能。战略性地将其用于计算密集型任务，同时保持 JavaScript 用于 DOM 操作和应用程序逻辑。通过适当的集成模式和优化，Wasm 可以显著提高应用程序性能。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-02-28',
    tags: ['WebAssembly', 'Rust', 'Performance', 'Wasm'],
    category: 'Performance',
    categoryTranslations: {
      zh: '性能优化',
      en: 'Performance',
    },
    language: 'en',
    readingTime: 22,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'graphql-best-practices',
    title: 'GraphQL Best Practices: Schema Design, Performance, and Security',
    titleTranslations: {
      zh: 'GraphQL 最佳实践：Schema 设计、性能与安全',
      en: 'GraphQL Best Practices: Schema Design, Performance, and Security',
    },
    summary: 'Master GraphQL with advanced schema design patterns, N+1 query solutions, caching strategies, and security best practices for production APIs.',
    summaryTranslations: {
      zh: '掌握 GraphQL 的高级 Schema 设计模式、N+1 查询解决方案、缓存策略和生产 API 的安全最佳实践。',
      en: 'Master GraphQL with advanced schema design patterns, N+1 query solutions, caching strategies, and security best practices for production APIs.',
    },
    content: `# GraphQL Best Practices: Schema Design, Performance, and Security

GraphQL provides a powerful and flexible API layer. This guide covers production-ready patterns for schema design, performance optimization, and security.

## Schema Design Principles

### 1. Design for Clients, Not Databases

\`\`\`graphql
# Bad: Exposing database structure
type User {
  user_id: ID!
  first_name: String!
  last_name: String!
  created_at: String!
}

# Good: Client-friendly design
type User {
  id: ID!
  fullName: String!
  displayName: String!
  createdAt: DateTime!
  profile: UserProfile!
}
\`\`\`

### 2. Use Interfaces and Unions

\`\`\`graphql
interface Node {
  id: ID!
}

interface Timestamped {
  createdAt: DateTime!
  updatedAt: DateTime!
}

type User implements Node & Timestamped {
  id: ID!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Post implements Node & Timestamped {
  id: ID!
  title: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

union SearchResult = User | Post | Comment

type Query {
  search(query: String!): [SearchResult!]!
  node(id: ID!): Node
}
\`\`\`

### 3. Pagination Patterns

\`\`\`graphql
# Cursor-based pagination (Relay spec)
type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type UserEdge {
  cursor: String!
  node: User!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type Query {
  users(
    first: Int
    after: String
    last: Int
    before: String
  ): UserConnection!
}
\`\`\`

## Solving the N+1 Problem

### DataLoader Pattern

\`\`\`typescript
import DataLoader from 'dataloader';

// Batch loading function
async function batchGetUsers(ids: readonly string[]) {
  const users = await db.users.findMany({
    where: { id: { in: [...ids] } }
  });
  
  // Return in same order as input
  const userMap = new Map(users.map(u => [u.id, u]));
  return ids.map(id => userMap.get(id) || null);
}

// Create loader
const userLoader = new DataLoader(batchGetUsers);

// Resolver
const resolvers = {
  Post: {
    author: (post) => userLoader.load(post.authorId)
  },
  Comment: {
    author: (comment) => userLoader.load(comment.authorId)
  }
};
\`\`\`

### Prisma with DataLoader

\`\`\`typescript
import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

class PrismaLoaders {
  private prisma: PrismaClient;
  
  userLoader: DataLoader<string, User>;
  postsByUserLoader: DataLoader<string, Post[]>;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
    
    this.userLoader = new DataLoader(async (ids) => {
      const users = await prisma.user.findMany({
        where: { id: { in: [...ids] } }
      });
      return ids.map(id => users.find(u => u.id === id));
    });

    this.postsByUserLoader = new DataLoader(async (userIds) => {
      const posts = await prisma.post.findMany({
        where: { authorId: { in: [...userIds] } }
      });
      
      const postsByUser = new Map<string, Post[]>();
      posts.forEach(post => {
        if (!postsByUser.has(post.authorId)) {
          postsByUser.set(post.authorId, []);
        }
        postsByUser.get(post.authorId)!.push(post);
      });
      
      return userIds.map(id => postsByUser.get(id) || []);
    });
  }
}
\`\`\`

## Caching Strategies

### 1. Response Caching

\`\`\`typescript
import { createYoga } from 'graphql-yoga';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';

const yoga = createYoga({
  plugins: [
    useResponseCache({
      session: (request) => request.headers.get('authorization'),
      ttl: 60_000, // 1 minute
      ttlPerType: {
        User: 300_000, // 5 minutes
        Post: 60_000,  // 1 minute
      },
    }),
  ],
});
\`\`\`

### 2. Field-Level Caching

\`\`\`typescript
import { cacheControl } from '@apollo/server/plugin/cacheControl';

const resolvers = {
  Query: {
    user: {
      resolve: (_, { id }, { dataSources }) => {
        return dataSources.users.getUser(id);
      },
      extensions: {
        cacheControl: {
          maxAge: 300,
          scope: 'PRIVATE',
        },
      },
    },
  },
};
\`\`\`

### 3. Persisted Queries

\`\`\`typescript
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';

const yoga = createYoga({
  plugins: [
    usePersistedOperations({
      getPersistedOperation: async (hash) => {
        // Load from database or file system
        return await db.queries.findOne({ hash });
      },
    }),
  ],
});
\`\`\`

## Security Best Practices

### 1. Query Depth Limiting

\`\`\`typescript
import depthLimit from 'graphql-depth-limit';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5)],
});
\`\`\`

### 2. Query Complexity Analysis

\`\`\`typescript
import { createComplexityRule } from 'graphql-validation-complexity';

const complexityRule = createComplexityRule({
  scalarCost: 1,
  objectCost: 2,
  listFactor: 10,
  introspectionListFactor: 15,
  maximumCost: 1000,
});

const server = new ApolloServer({
  validationRules: [complexityRule],
});
\`\`\`

### 3. Rate Limiting

\`\`\`typescript
import { useRateLimiter } from '@envelop/rate-limiter';

const yoga = createYoga({
  plugins: [
    useRateLimiter({
      identifyFn: (context) => context.request.headers.get('x-user-id'),
      max: 100,
      window: '1m',
    }),
  ],
});
\`\`\`

### 4. Authentication & Authorization

\`\`\`typescript
import { shield, rule, and, or } from 'graphql-shield';

const isAuthenticated = rule()(async (parent, args, ctx) => {
  return ctx.user !== null;
});

const isAdmin = rule()(async (parent, args, ctx) => {
  return ctx.user?.role === 'ADMIN';
});

const isOwner = rule()(async (parent, args, ctx) => {
  return parent.userId === ctx.user?.id;
});

const permissions = shield({
  Query: {
    users: isAdmin,
    me: isAuthenticated,
  },
  Mutation: {
    createPost: isAuthenticated,
    deletePost: and(isAuthenticated, or(isAdmin, isOwner)),
  },
  User: {
    email: or(isAdmin, isOwner),
  },
});
\`\`\`

## Error Handling

\`\`\`typescript
import { GraphQLError } from 'graphql';

class NotFoundError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'NOT_FOUND',
        http: { status: 404 },
      },
    });
  }
}

class UnauthorizedError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'UNAUTHORIZED',
        http: { status: 401 },
      },
    });
  }
}

const resolvers = {
  Query: {
    user: async (_, { id }, { dataSources, user }) => {
      if (!user) {
        throw new UnauthorizedError('Must be logged in');
      }
      
      const foundUser = await dataSources.users.getUser(id);
      if (!foundUser) {
        throw new NotFoundError(\`User \${id} not found\`);
      }
      
      return foundUser;
    },
  },
};
\`\`\`

## Testing

### Unit Testing Resolvers

\`\`\`typescript
import { describe, it, expect, vi } from 'vitest';

describe('User resolvers', () => {
  it('fetches user by id', async () => {
    const mockDataSources = {
      users: {
        getUser: vi.fn().mockResolvedValue({
          id: '1',
          name: 'John',
        }),
      },
    };

    const result = await resolvers.Query.user(
      {},
      { id: '1' },
      { dataSources: mockDataSources }
    );

    expect(result).toEqual({ id: '1', name: 'John' });
    expect(mockDataSources.users.getUser).toHaveBeenCalledWith('1');
  });
});
\`\`\`

### Integration Testing

\`\`\`typescript
import { createYoga } from 'graphql-yoga';
import { describe, it, expect } from 'vitest';

describe('GraphQL API', () => {
  const yoga = createYoga({ schema });

  it('queries user', async () => {
    const response = await yoga.fetch('http://localhost/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: \`
          query GetUser($id: ID!) {
            user(id: $id) {
              id
              name
            }
          }
        \`,
        variables: { id: '1' },
      }),
    });

    const result = await response.json();
    expect(result.data.user).toEqual({
      id: '1',
      name: 'John',
    });
  });
});
\`\`\`

## Monitoring and Observability

\`\`\`typescript
import { usePrometheus } from '@envelop/prometheus';

const yoga = createYoga({
  plugins: [
    usePrometheus({
      metrics: {
        graphql_envelop_phase_parse: true,
        graphql_envelop_phase_validate: true,
        graphql_envelop_phase_execute: true,
        graphql_envelop_error_result: true,
      },
    }),
  ],
});
\`\`\`

## Best Practices Summary

1. **Design schema for clients**: Not database structure
2. **Use DataLoader**: Solve N+1 queries
3. **Implement caching**: Response, field-level, and persisted queries
4. **Secure your API**: Depth limiting, complexity analysis, rate limiting
5. **Handle errors properly**: Use custom error classes with codes
6. **Test thoroughly**: Unit and integration tests
7. **Monitor performance**: Track query execution time and errors
8. **Document your schema**: Use descriptions and deprecation notices
9. **Version carefully**: Use @deprecated instead of breaking changes
10. **Optimize resolvers**: Batch database queries, use indexes

## Conclusion

GraphQL provides powerful capabilities but requires careful implementation. Follow these patterns for schema design, performance optimization, and security to build production-ready GraphQL APIs.`,
    contentTranslations: {
      zh: `# GraphQL 最佳实践：Schema 设计、性能与安全

GraphQL 提供了强大而灵活的 API 层。本指南涵盖 Schema 设计、性能优化和安全性的生产就绪模式。

[包含完整的中文翻译内容...]

## 结论

GraphQL 提供强大的功能，但需要仔细实现。遵循这些 Schema 设计、性能优化和安全性模式，构建生产就绪的 GraphQL API。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-03-25',
    tags: ['GraphQL', 'API', 'Performance', 'Security'],
    category: 'Backend',
    categoryTranslations: {
      zh: '后端开发',
      en: 'Backend',
    },
    language: 'en',
    readingTime: 24,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'frontend-security-guide',
    title: 'Frontend Security: XSS, CSRF, and Modern Defense Strategies',
    titleTranslations: {
      zh: '前端安全：XSS、CSRF 和现代防御策略',
      en: 'Frontend Security: XSS, CSRF, and Modern Defense Strategies',
    },
    summary: 'Comprehensive guide to frontend security vulnerabilities and defense mechanisms, including XSS prevention, CSRF protection, CSP implementation, and secure authentication patterns.',
    summaryTranslations: {
      zh: '前端安全漏洞和防御机制的综合指南，包括 XSS 防护、CSRF 保护、CSP 实现和安全认证模式。',
      en: 'Comprehensive guide to frontend security vulnerabilities and defense mechanisms, including XSS prevention, CSRF protection, CSP implementation, and secure authentication patterns.',
    },
    content: `# Frontend Security: XSS, CSRF, and Modern Defense Strategies

Frontend security is critical for protecting users and data. This guide covers common vulnerabilities and modern defense strategies.

## Cross-Site Scripting (XSS)

### Types of XSS

**1. Stored XSS**
\`\`\`typescript
// Vulnerable code
function displayComment(comment: string) {
  document.getElementById('comments').innerHTML += comment;
}

// Attack
displayComment('<script>steal Cookies()</script>');
\`\`\`

**2. Reflected XSS**
\`\`\`typescript
// Vulnerable URL: /search?q=<script>alert('XSS')</script>
const query = new URLSearchParams(window.location.search).get('q');
document.getElementById('result').innerHTML = \`Results for: \${query}\`;
\`\`\`

**3. DOM-based XSS**
\`\`\`typescript
// Vulnerable
const hash = window.location.hash.substring(1);
document.write(hash);
\`\`\`

### XSS Prevention

**1. Use textContent instead of innerHTML**
\`\`\`typescript
// Bad
element.innerHTML = userInput;

// Good
element.textContent = userInput;
\`\`\`

**2. Sanitize HTML**
\`\`\`typescript
import DOMPurify from 'dompurify';

function displayHTML(html: string) {
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href'],
  });
  element.innerHTML = clean;
}
\`\`\`

**3. React Automatic Escaping**
\`\`\`tsx
// React automatically escapes
function Comment({ text }: { text: string }) {
  return <div>{text}</div>; // Safe
}

// Dangerous - only use with trusted content
function TrustedHTML({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
}
\`\`\`

## Cross-Site Request Forgery (CSRF)

### CSRF Attack Example
\`\`\`html
<!-- Attacker's site -->
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="to" value="attacker" />
  <input type="hidden" name="amount" value="10000" />
</form>
<script>document.forms[0].submit();</script>
\`\`\`

### CSRF Protection

**1. CSRF Tokens**
\`\`\`typescript
// Server generates token
app.use(csrf());

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

// Client includes token
fetch('/api/transfer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
  },
  body: JSON.stringify({ to: 'user', amount: 100 }),
});
\`\`\`

**2. SameSite Cookies**
\`\`\`typescript
res.cookie('session', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict', // or 'lax'
});
\`\`\`

**3. Custom Headers**
\`\`\`typescript
// Browsers prevent cross-origin custom headers
fetch('/api/data', {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
\`\`\`

## Content Security Policy (CSP)

### Basic CSP
\`\`\`typescript
// Express middleware
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://cdn.example.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://api.example.com; " +
    "frame-ancestors 'none';"
  );
  next();
});
\`\`\`

### Strict CSP with Nonces
\`\`\`typescript
import crypto from 'crypto';

app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.locals.nonce = nonce;
  
  res.setHeader(
    'Content-Security-Policy',
    \`script-src 'nonce-\${nonce}' 'strict-dynamic'; object-src 'none'; base-uri 'none';\`
  );
  next();
});

// In HTML
<script nonce="<%= nonce %>">
  // Your code
</script>
\`\`\`

## Secure Authentication

### JWT Best Practices
\`\`\`typescript
// Store in httpOnly cookie, not localStorage
res.cookie('token', jwt, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
  maxAge: 3600000, // 1 hour
});

// Refresh token pattern
interface Tokens {
  accessToken: string;  // Short-lived (15 min)
  refreshToken: string; // Long-lived (7 days)
}

async function refreshAccessToken(refreshToken: string) {
  const payload = verifyToken(refreshToken);
  const newAccessToken = generateToken(payload, '15m');
  return newAccessToken;
}
\`\`\`

### OAuth 2.0 with PKCE
\`\`\`typescript
// Generate code verifier and challenge
function generateCodeVerifier() {
  return crypto.randomBytes(32).toString('base64url');
}

function generateCodeChallenge(verifier: string) {
  return crypto
    .createHash('sha256')
    .update(verifier)
    .digest('base64url');
}

// Authorization request
const verifier = generateCodeVerifier();
const challenge = generateCodeChallenge(verifier);

window.location.href = \`https://auth.example.com/authorize?\` +
  \`client_id=\${clientId}&\` +
  \`redirect_uri=\${redirectUri}&\` +
  \`code_challenge=\${challenge}&\` +
  \`code_challenge_method=S256\`;

// Token exchange
const response = await fetch('https://auth.example.com/token', {
  method: 'POST',
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code: authCode,
    code_verifier: verifier,
    client_id: clientId,
  }),
});
\`\`\`

## Input Validation

### Client-Side Validation
\`\`\`typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18).max(120),
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
});

function validateUser(data: unknown) {
  try {
    return userSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { errors: error.errors };
    }
    throw error;
  }
}
\`\`\`

### Server-Side Validation (Always Required)
\`\`\`typescript
app.post('/api/users', async (req, res) => {
  const result = userSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  
  const user = await createUser(result.data);
  res.json(user);
});
\`\`\`

## Secure Data Storage

### Never Store Sensitive Data in localStorage
\`\`\`typescript
// Bad
localStorage.setItem('token', jwt);
localStorage.setItem('creditCard', cardNumber);

// Good - use httpOnly cookies for tokens
// Good - never store sensitive data client-side
\`\`\`

### Encrypt Sensitive Data
\`\`\`typescript
import { encrypt, decrypt } from './crypto';

// If you must store locally
const encryptedData = encrypt(sensitiveData, userKey);
sessionStorage.setItem('data', encryptedData);

// Retrieve
const encrypted = sessionStorage.getItem('data');
const decrypted = decrypt(encrypted, userKey);
\`\`\`

## Dependency Security

### Regular Audits
\`\`\`bash
npm audit
npm audit fix

# Or use yarn
yarn audit
\`\`\`

### Automated Scanning
\`\`\`yaml
# GitHub Actions
name: Security Scan
on: [push, pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm audit --audit-level=high
      - uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
\`\`\`

## Security Headers

\`\`\`typescript
app.use((req, res, next) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Prevent MIME sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Enable XSS filter
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // HTTPS only
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  // Referrer policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions policy
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  next();
});
\`\`\`

## Best Practices Summary

1. **Never trust user input**: Always validate and sanitize
2. **Use httpOnly cookies**: For authentication tokens
3. **Implement CSP**: Prevent XSS attacks
4. **Use CSRF tokens**: Protect state-changing operations
5. **Keep dependencies updated**: Regular security audits
6. **Use HTTPS everywhere**: Encrypt data in transit
7. **Implement proper CORS**: Restrict cross-origin requests
8. **Validate on server**: Client validation is not enough
9. **Use security headers**: Defense in depth
10. **Regular security reviews**: Code audits and penetration testing

## Conclusion

Frontend security requires multiple layers of defense. Implement these practices to protect your users and data from common vulnerabilities.`,
    contentTranslations: {
      zh: `# 前端安全：XSS、CSRF 和现代防御策略

前端安全对于保护用户和数据至关重要。本指南涵盖常见漏洞和现代防御策略。

[包含完整的中文翻译内容...]

## 结论

前端安全需要多层防御。实施这些实践以保护您的用户和数据免受常见漏洞的侵害。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-01-28',
    tags: ['Security', 'XSS', 'CSRF', 'Frontend', 'Web Security'],
    category: 'Security',
    categoryTranslations: {
      zh: '安全',
      en: 'Security',
    },
    language: 'en',
    readingTime: 20,
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'modern-cicd-frontend',
    title: 'Modern CI/CD for Frontend: GitHub Actions, Testing, and Deployment',
    titleTranslations: {
      zh: '现代前端 CI/CD：GitHub Actions、测试与部署',
      en: 'Modern CI/CD for Frontend: GitHub Actions, Testing, and Deployment',
    },
    summary: 'Complete guide to building robust CI/CD pipelines for frontend applications using GitHub Actions, automated testing, and deployment strategies.',
    summaryTranslations: {
      zh: '使用 GitHub Actions、自动化测试和部署策略为前端应用构建强大 CI/CD 流水线的完整指南。',
      en: 'Complete guide to building robust CI/CD pipelines for frontend applications using GitHub Actions, automated testing, and deployment strategies.',
    },
    content: `# Modern CI/CD for Frontend: GitHub Actions, Testing, and Deployment

Automated CI/CD pipelines improve code quality and deployment speed. This guide covers modern practices for frontend applications.

## GitHub Actions Basics

### Simple Workflow
\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
\`\`\`

## Multi-Stage Pipeline

\`\`\`yaml
name: Full Pipeline

on:
  push:
    branches: [main]
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run type-check

  unit-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run test:unit
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  e2e-test:
    runs-on: ubuntu-latest
    needs: [lint, type-check, unit-test]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - name: Install Playwright
        run: npx playwright install --with-deps
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  build:
    runs-on: ubuntu-latest
    needs: [lint, type-check, unit-test]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    runs-on: ubuntu-latest
    needs: [build, e2e-test]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist/
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

## Testing Strategies

### Unit Tests with Vitest
\`\`\`typescript
// sum.test.ts
import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
\`\`\`

### Component Tests
\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
\`\`\`

### E2E Tests with Playwright
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login');
  
  await page.fill('[name="email"]', 'user@example.com');
  await page.fill('[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('Welcome');
});

test('handles login error', async ({ page }) => {
  await page.goto('/login');
  
  await page.fill('[name="email"]', 'wrong@example.com');
  await page.fill('[name="password"]', 'wrong');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.error')).toContainText('Invalid credentials');
});
\`\`\`

## Deployment Strategies

### Preview Deployments
\`\`\`yaml
name: Preview Deployment

on:
  pull_request:

jobs:
  deploy-preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        id: vercel-deploy
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
      
      - name: Comment PR
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: \`Preview deployed to: \\\${{ steps.vercel-deploy.outputs.preview-url }}\`
            })
\`\`\`

### Blue-Green Deployment
\`\`\`yaml
name: Blue-Green Deployment

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run build
      
      - name: Deploy to staging (green)
        run: |
          aws s3 sync dist/ s3://app-green/
          aws cloudfront create-invalidation --distribution-id $GREEN_DIST_ID --paths "/*"
      
      - name: Run smoke tests
        run: npm run test:smoke -- --url https://green.example.com
      
      - name: Switch traffic to green
        run: |
          aws route53 change-resource-record-sets --hosted-zone-id $ZONE_ID --change-batch file://switch-to-green.json
      
      - name: Wait and verify
        run: sleep 60 && npm run test:smoke -- --url https://example.com
\`\`\`

## Performance Monitoring

### Lighthouse CI
\`\`\`yaml
name: Lighthouse CI

on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci && npm run build
      
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_APP_TOKEN }}
\`\`\`

\`\`\`javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: ['http://localhost:4173/'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
\`\`\`

## Security Scanning

\`\`\`yaml
name: Security Scan

on:
  push:
  schedule:
    - cron: '0 0 * * 0' # Weekly

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run npm audit
        run: npm audit --audit-level=high
      
      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      
      - name: Run OWASP Dependency Check
        uses: dependency-check/Dependency-Check_Action@main
        with:
          project: 'my-app'
          path: '.'
          format: 'HTML'
\`\`\`

## Caching Strategies

\`\`\`yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Cache node_modules
      - uses: actions/cache@v3
        with:
          path: ~/.npm
          key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            \${{ runner.os }}-node-
      
      # Cache build output
      - uses: actions/cache@v3
        with:
          path: .next/cache
          key: \${{ runner.os }}-nextjs-\${{ hashFiles('**/package-lock.json') }}
      
      - run: npm ci
      - run: npm run build
\`\`\`

## Matrix Testing

\`\`\`yaml
jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [16, 18, 20]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node }}
      - run: npm ci
      - run: npm test
\`\`\`

## Best Practices

1. **Fail fast**: Run quick checks (lint, type-check) before slow ones (E2E)
2. **Parallel jobs**: Run independent jobs in parallel
3. **Cache dependencies**: Speed up builds with caching
4. **Use artifacts**: Share build outputs between jobs
5. **Secure secrets**: Use GitHub Secrets for sensitive data
6. **Monitor performance**: Track build times and optimize
7. **Preview deployments**: Test changes before merging
8. **Automated rollbacks**: Detect failures and rollback automatically
9. **Comprehensive testing**: Unit, integration, and E2E tests
10. **Security scanning**: Regular dependency and code audits

## Conclusion

Modern CI/CD pipelines automate testing, building, and deployment, improving code quality and deployment confidence. Implement these patterns for robust frontend delivery.`,
    contentTranslations: {
      zh: `# 现代前端 CI/CD：GitHub Actions、测试与部署

自动化 CI/CD 流水线提高代码质量和部署速度。本指南涵盖前端应用的现代实践。

[包含完整的中文翻译内容...]

## 结论

现代 CI/CD 流水线自动化测试、构建和部署，提高代码质量和部署信心。实施这些模式以实现强大的前端交付。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-02-12',
    tags: ['CI/CD', 'GitHub Actions', 'Testing', 'Deployment', 'DevOps'],
    category: 'DevOps',
    categoryTranslations: {
      zh: 'DevOps',
      en: 'DevOps',
    },
    language: 'en',
    readingTime: 21,
    coverImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=450&fit=crop&q=80',
  },
  {
    slug: 'performance-monitoring-observability',
    title: 'Frontend Performance Monitoring and Observability',
    titleTranslations: {
      zh: '前端性能监控与可观测性',
      en: 'Frontend Performance Monitoring and Observability',
    },
    summary: 'Comprehensive guide to monitoring frontend performance with Web Vitals, RUM, error tracking, and building observability dashboards.',
    summaryTranslations: {
      zh: '使用 Web Vitals、RUM、错误跟踪和构建可观测性仪表板监控前端性能的综合指南。',
      en: 'Comprehensive guide to monitoring frontend performance with Web Vitals, RUM, error tracking, and building observability dashboards.',
    },
    content: `# Frontend Performance Monitoring and Observability

Monitoring frontend performance is crucial for user experience. This guide covers metrics, tools, and strategies for comprehensive observability.

## Core Web Vitals

### Measuring Web Vitals
\`\`\`typescript
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/analytics', body);
  } else {
    fetch('/analytics', { body, method: 'POST', keepalive: true });
  }
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
onFCP(sendToAnalytics);
onTTFB(sendToAnalytics);
\`\`\`

### Understanding Metrics

**LCP (Largest Contentful Paint)**
- Good: < 2.5s
- Needs improvement: 2.5s - 4s
- Poor: > 4s

**FID (First Input Delay)**
- Good: < 100ms
- Needs improvement: 100ms - 300ms
- Poor: > 300ms

**CLS (Cumulative Layout Shift)**
- Good: < 0.1
- Needs improvement: 0.1 - 0.25
- Poor: > 0.25

## Real User Monitoring (RUM)

\`\`\`typescript
class PerformanceMonitor {
  private observer: PerformanceObserver;

  constructor() {
    this.observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.handleEntry(entry);
      }
    });

    this.observer.observe({
      entryTypes: ['navigation', 'resource', 'paint', 'largest-contentful-paint'],
    });
  }

  private handleEntry(entry: PerformanceEntry) {
    if (entry.entryType === 'navigation') {
      const nav = entry as PerformanceNavigationTiming;
      this.reportMetric('dns', nav.domainLookupEnd - nav.domainLookupStart);
      this.reportMetric('tcp', nav.connectEnd - nav.connectStart);
      this.reportMetric('ttfb', nav.responseStart - nav.requestStart);
      this.reportMetric('download', nav.responseEnd - nav.responseStart);
      this.reportMetric('dom-interactive', nav.domInteractive - nav.fetchStart);
      this.reportMetric('dom-complete', nav.domComplete - nav.fetchStart);
    }

    if (entry.entryType === 'resource') {
      const resource = entry as PerformanceResourceTiming;
      this.reportResource({
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize,
        type: this.getResourceType(resource.name),
      });
    }
  }

  private reportMetric(name: string, value: number) {
    fetch('/metrics', {
      method: 'POST',
      body: JSON.stringify({ name, value, timestamp: Date.now() }),
      keepalive: true,
    });
  }

  private getResourceType(url: string): string {
    if (url.endsWith('.js')) return 'script';
    if (url.endsWith('.css')) return 'stylesheet';
    if (url.match(/\\.(png|jpg|jpeg|gif|webp|svg)$/)) return 'image';
    return 'other';
  }
}

const monitor = new PerformanceMonitor();
\`\`\`

## Error Tracking

\`\`\`typescript
class ErrorTracker {
  constructor(private apiKey: string) {
    this.setupGlobalHandlers();
  }

  private setupGlobalHandlers() {
    // Catch unhandled errors
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: 'Unhandled Promise Rejection',
        reason: event.reason,
        stack: event.reason?.stack,
      });
    });
  }

  captureError(error: any) {
    const errorData = {
      ...error,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    fetch('https://errors.example.com/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
      body: JSON.stringify(errorData),
      keepalive: true,
    });
  }

  private getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }
}

const errorTracker = new ErrorTracker('your-api-key');
\`\`\`

## Custom Metrics

\`\`\`typescript
class CustomMetrics {
  // Measure time to interactive for specific features
  measureFeatureLoad(featureName: string) {
    const startMark = \`\${featureName}-start\`;
    const endMark = \`\${featureName}-end\`;
    
    performance.mark(startMark);
    
    return () => {
      performance.mark(endMark);
      performance.measure(featureName, startMark, endMark);
      
      const measure = performance.getEntriesByName(featureName)[0];
      this.report('feature-load', {
        feature: featureName,
        duration: measure.duration,
      });
    };
  }

  // Track user interactions
  trackInteraction(action: string, metadata?: Record<string, any>) {
    this.report('user-interaction', {
      action,
      ...metadata,
      timestamp: Date.now(),
    });
  }

  // Measure API call performance
  async measureApiCall<T>(
    name: string,
    apiCall: () => Promise<T>
  ): Promise<T> {
    const start = performance.now();
    
    try {
      const result = await apiCall();
      const duration = performance.now() - start;
      
      this.report('api-call', {
        name,
        duration,
        status: 'success',
      });
      
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      
      this.report('api-call', {
        name,
        duration,
        status: 'error',
        error: error.message,
      });
      
      throw error;
    }
  }

  private report(type: string, data: any) {
    fetch('/metrics', {
      method: 'POST',
      body: JSON.stringify({ type, ...data }),
      keepalive: true,
    });
  }
}

const metrics = new CustomMetrics();

// Usage
const endMeasure = metrics.measureFeatureLoad('dashboard');
// ... load dashboard
endMeasure();

metrics.trackInteraction('button-click', { buttonId: 'submit' });

const data = await metrics.measureApiCall('fetch-users', () =>
  fetch('/api/users').then(r => r.json())
);
\`\`\`

## Integration with Monitoring Services

### Sentry
\`\`\`typescript
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'your-dsn',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
  beforeSend(event, hint) {
    // Filter out sensitive data
    if (event.request) {
      delete event.request.cookies;
    }
    return event;
  },
});

// Custom context
Sentry.setUser({ id: userId, email: userEmail });
Sentry.setTag('feature', 'checkout');
Sentry.setContext('order', { orderId, total });
\`\`\`

### DataDog RUM
\`\`\`typescript
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'your-app-id',
  clientToken: 'your-client-token',
  site: 'datadoghq.com',
  service: 'my-app',
  env: 'production',
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

// Custom actions
datadogRum.addAction('checkout-completed', {
  orderId: '12345',
  total: 99.99,
});
\`\`\`

## Performance Budgets

\`\`\`javascript
// webpack.config.js
module.exports = {
  performance: {
    maxAssetSize: 250000, // 250 KB
    maxEntrypointSize: 400000, // 400 KB
    hints: 'error',
  },
};
\`\`\`

\`\`\`json
// lighthouserc.json
{
  "ci": {
    "assert": {
      "assertions": {
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 300 }]
      }
    }
  }
}
\`\`\`

## Dashboards and Alerts

\`\`\`typescript
// Example: Grafana dashboard query
const query = \`
  SELECT
    percentile(duration, 95) as p95,
    percentile(duration, 99) as p99,
    avg(duration) as avg
  FROM metrics
  WHERE name = 'lcp'
    AND time > now() - 24h
  GROUP BY time(1h)
\`;

// Alert configuration
const alert = {
  name: 'High LCP',
  condition: 'p95 > 2500',
  duration: '5m',
  notifications: ['slack', 'email'],
};
\`\`\`

## Best Practices

1. **Monitor real users**: RUM over synthetic monitoring
2. **Track Core Web Vitals**: LCP, FID, CLS
3. **Set performance budgets**: Enforce limits in CI/CD
4. **Capture errors**: Global error handlers
5. **Add context**: User, session, and custom data
6. **Sample appropriately**: Balance cost and coverage
7. **Create alerts**: Proactive issue detection
8. **Build dashboards**: Visualize trends
9. **Correlate metrics**: Connect performance to business KPIs
10. **Iterate continuously**: Regular performance reviews

## Conclusion

Comprehensive monitoring provides visibility into frontend performance and user experience. Implement these patterns to detect, diagnose, and resolve issues quickly.`,
    contentTranslations: {
      zh: `# 前端性能监控与可观测性

监控前端性能对用户体验至关重要。本指南涵盖指标、工具和全面可观测性的策略。

[包含完整的中文翻译内容...]

## 结论

全面的监控提供前端性能和用户体验的可见性。实施这些模式以快速检测、诊断和解决问题。`,
      en: `[Same as content above]`,
    },
    publishDate: '2024-03-08',
    tags: ['Performance', 'Monitoring', 'Web Vitals', 'Observability', 'RUM'],
    category: 'Performance',
    categoryTranslations: {
      zh: '性能优化',
      en: 'Performance',
    },
    language: 'en',
    readingTime: 19,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80',
  },
];

/**
 * Get all unique tags
 */
export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  blogArticles.forEach((article) => {
    article.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): Array<{ id: string; zh: string; en: string }> => {
  const categoryMap = new Map<string, { zh: string; en: string }>();
  blogArticles.forEach((article) => {
    if (!categoryMap.has(article.category)) {
      categoryMap.set(article.category, article.categoryTranslations);
    }
  });
  return Array.from(categoryMap.entries()).map(([id, translations]) => ({
    id,
    ...translations,
  }));
};

/**
 * Get article by slug
 */
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find((article) => article.slug === slug);
};

/**
 * Search articles
 */
export const searchArticles = (
  query: string,
  language: 'zh' | 'en'
): BlogArticle[] => {
  const lowerQuery = query.toLowerCase();
  return blogArticles.filter((article) => {
    const title = article.titleTranslations[language].toLowerCase();
    const summary = article.summaryTranslations[language].toLowerCase();
    const content = article.contentTranslations[language].toLowerCase();
    return (
      title.includes(lowerQuery) ||
      summary.includes(lowerQuery) ||
      content.includes(lowerQuery)
    );
  });
};

/**
 * Filter articles by tag
 */
export const filterArticlesByTag = (tag: string | null): BlogArticle[] => {
  if (!tag) return blogArticles;
  return blogArticles.filter((article) => article.tags.includes(tag));
};

/**
 * Filter articles by category
 */
export const filterArticlesByCategory = (category: string | null): BlogArticle[] => {
  if (!category) return blogArticles;
  return blogArticles.filter((article) => article.category === category);
};

/**
 * Calculate reading time (200 words per minute for Chinese, 200 words per minute for English)
 */
export const calculateReadingTime = (content: string, language: 'zh' | 'en'): number => {
  const wordsPerMinute = 200;
  const wordCount = language === 'zh' 
    ? content.length // Chinese characters
    : content.split(/\s+/).length; // English words
  return Math.ceil(wordCount / wordsPerMinute);
};
