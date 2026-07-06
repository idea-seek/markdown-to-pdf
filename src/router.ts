/**
 * 轻量 History API 路由器
 * 支持路由: / | /markdown-to-word/ | /markdown-to-pdf/ | /markdown-to-html/ | /markdown-to-image/
 */

export type Route = 'home' | 'word' | 'pdf' | 'html' | 'image';

export interface RouteConfig {
  id: Route;
  path: string;        // e.g. '/markdown-to-word/'
  title: string;
  description: string;
  keywords: string;
  label: string;
  formatLabel: string;
  formatDesc: string;
  icon: string;
  color: string;
}

export const routes: RouteConfig[] = [
  {
    id: 'home',
    path: '/',
    title: 'Markdown 转 PDF - 免费在线转换工具',
    description: '免费在线 Markdown 转换器，支持实时预览，将 Markdown 转换为 Word、PDF、HTML、图片。所有处理均在浏览器本地完成，无需注册。',
    keywords: 'Markdown转PDF,Markdown在线编辑器,MD转Word,MD转PDF,Markdown转HTML',
    label: '首页',
    formatLabel: '导出 PDF',
    formatDesc: '浏览器打印为 PDF，支持 A4 排版，保留代码高亮和数学公式',
    icon: 'P',
    color: '#EF4444',
  },
  {
    id: 'word',
    path: '/markdown-to-word/',
    title: 'Markdown 转 Word - 免费在线转换工具',
    description: '将 Markdown 在线转换为 Word (.docx) 文档。保留标题层级、表格、代码高亮、数学公式。浏览器本地处理，隐私安全。',
    keywords: 'Markdown转Word,MD转DOCX,Markdown导出Word,在线Markdown转Word,Markdown to Word',
    label: '转 Word',
    formatLabel: '导出 Word (.docx)',
    formatDesc: '生成可编辑的 Word 文档，保留标题、表格、代码高亮、公式',
    icon: 'W',
    color: '#2563EB',
  },
  {
    id: 'pdf',
    path: '/markdown-to-pdf/',
    title: 'Markdown 转 PDF - 免费在线转换工具',
    description: '将 Markdown 在线转换为 PDF 文档。支持 A4 排版、代码高亮、数学公式、中文优化。浏览器本地处理，无需上传文件。',
    keywords: 'Markdown转PDF,MD转PDF,Markdown导出PDF,在线Markdown转PDF,Markdown to PDF',
    label: '转 PDF',
    formatLabel: '导出 PDF',
    formatDesc: '浏览器打印为 PDF，支持 A4 排版，保留代码高亮和数学公式',
    icon: 'P',
    color: '#EF4444',
  },
  {
    id: 'html',
    path: '/markdown-to-html/',
    title: 'Markdown 转 HTML - 免费在线转换工具',
    description: '将 Markdown 在线转换为 HTML 代码。支持完整页面和片段导出，CSS 样式内置。浏览器本地处理，一键复制或下载。',
    keywords: 'Markdown转HTML,MD转HTML,Markdown导出HTML,在线Markdown转HTML,Markdown to HTML',
    label: '转 HTML',
    formatLabel: '导出 HTML',
    formatDesc: '导出完整 HTML 文档或代码片段，CSS 样式内置',
    icon: 'H',
    color: '#EA580C',
  },
  {
    id: 'image',
    path: '/markdown-to-image/',
    title: 'Markdown 转图片 - 免费在线转换工具',
    description: '将 Markdown 在线转换为高清图片。支持 PNG、JPG、WebP 格式，2x 像素密度。浏览器本地渲染，适合社交媒体分享。',
    keywords: 'Markdown转图片,MD转PNG,Markdown导出图片,在线Markdown转图片,Markdown to Image',
    label: '转图片',
    formatLabel: '导出图片',
    formatDesc: '导出 PNG/JPG/WebP 高清图片，2x 像素密度，适合社媒分享',
    icon: 'I',
    color: '#22C55E',
  },
];

/**
 * 从当前 pathname 解析路由 ID
 */
function parsePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, '/') || '/';
  // 移除末尾斜杠再比较，同时支持 /markdown-to-pdf 和 /markdown-to-pdf/
  const clean = normalized === '/' ? '/' : normalized.replace(/\/$/, '');
  const found = routes.find((r) => {
    const routeClean = r.path === '/' ? '/' : r.path.replace(/\/$/, '');
    return routeClean === clean;
  });
  return found?.id || 'home';
}

export function getCurrentRoute(): Route {
  return parsePath(window.location.pathname) as Route;
}

export function getRouteConfig(): RouteConfig {
  const id = getCurrentRoute();
  return routes.find((r) => r.id === id) || routes[0];
}

/**
 * 使用 History API 导航到目标路由
 */
export function navigate(route: Route) {
  const config = routes.find((r) => r.id === route);
  if (!config) return;
  history.pushState(null, '', config.path);
  // 手动触发路由变更回调
  emitRouteChange();
}

/**
 * 注册路由变更监听 (popstate + 手动 navigate)
 * 返回取消监听的函数
 */
type RouteCallback = (route: RouteConfig) => void;
let listeners: RouteCallback[] = [];

export function onRouteChange(callback: RouteCallback) {
  listeners.push(callback);
  // 首次加载立即触发
  callback(getRouteConfig());
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function emitRouteChange() {
  const config = getRouteConfig();
  listeners.forEach((cb) => cb(config));
}

// 监听浏览器前进/后退
window.addEventListener('popstate', emitRouteChange);

/**
 * 拦截页面内 <a> 点击，使用 pushState 导航（避免整页刷新）
 */
export function initLinkInterception() {
  document.addEventListener('click', (e) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    // 只处理同域的相对路径
    if (!href || href.startsWith('http') || href.startsWith('//')) return;
    // 确保路由中存在该路径
    const id = parsePath(href);
    const match = routes.find((r) => r.id === id);
    if (!match) return;
    e.preventDefault();
    navigate(id as Route);
  });
}

/**
 * Update page meta tags for SEO
 */
export function updateMeta(config: RouteConfig) {
  document.title = config.title;
  updateMetaTag('description', config.description);
  updateMetaTag('keywords', config.keywords);
  updateMetaTag('og:title', config.title);
  updateMetaTag('og:description', config.description);
  updateCanonical(config.path);
}

function updateMetaTag(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    if (name.startsWith('og:')) {
      el.setAttribute('property', name);
    } else {
      el.setAttribute('name', name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function updateCanonical(routePath: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = `${window.location.origin}${routePath}`;
}
