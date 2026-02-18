export interface Article {
  slug: string;
  date: string;
  readTime: string;
  tags: string[];
  thumbnail?: string;
  en: {
    title: string;
    excerpt: string;
    content: string;
  };
  ar: {
    title: string;
    excerpt: string;
    content: string;
  };
}

export const articles: Article[] = [
  {
    slug: "building-realtime-chat-with-websockets",
    date: "2026-01-15",
    readTime: "8 min",
    tags: ["WebSockets", "Node.js", "React"],
    en: {
      title: "Building a Real-Time Chat System with WebSockets",
      excerpt:
        "A deep dive into implementing a scalable real-time chat system using WebSockets, Node.js, and React , lessons learned from production.",
      content: `
## Introduction

Real-time communication is at the heart of modern web applications. In this article, I'll walk you through how I built a production-ready chat system for an EdTech platform that handles thousands of concurrent connections.

## Table of Contents

- Architecture Overview
- Setting Up the WebSocket Server
- Client-Side Integration
- Handling Reconnections
- Performance Considerations

## Architecture Overview

The system follows a simple but effective architecture:

\`\`\`
Client (React) <--WebSocket--> Server (Node.js) <---> PostgreSQL
\`\`\`

Each message is persisted to the database and broadcast in real-time to connected clients.

## Setting Up the WebSocket Server

Here's the core server setup using the \`ws\` library:

\`\`\`javascript
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Map();

wss.on('connection', (ws, req) => {
  const userId = getUserFromToken(req);
  clients.set(userId, ws);

  ws.on('message', async (data) => {
    const message = JSON.parse(data);
    
    // Persist to database
    await db.query(
      'INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3)',
      [userId, message.to, message.content]
    );

    // Forward to recipient
    const recipient = clients.get(message.to);
    if (recipient?.readyState === WebSocket.OPEN) {
      recipient.send(JSON.stringify({
        from: userId,
        content: message.content,
        timestamp: new Date().toISOString()
      }));
    }
  });

  ws.on('close', () => clients.delete(userId));
});

server.listen(3001);
\`\`\`

## Client-Side Integration

On the React side, I created a custom hook for managing the WebSocket connection:

\`\`\`tsx
import { useEffect, useRef, useState, useCallback } from 'react';

interface Message {
  from: string;
  content: string;
  timestamp: string;
}

export function useChat(userId: string) {
  const ws = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    ws.current = new WebSocket(\`wss://api.example.com?token=\${getToken()}\`);

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };

    return () => ws.current?.close();
  }, [userId]);

  const sendMessage = useCallback((to: string, content: string) => {
    ws.current?.send(JSON.stringify({ to, content }));
  }, []);

  return { messages, sendMessage };
}
\`\`\`

## Handling Reconnections

One critical aspect is handling dropped connections gracefully:

\`\`\`typescript
function connectWithRetry(url: string, maxRetries = 5) {
  let retries = 0;
  
  function connect() {
    const ws = new WebSocket(url);
    
    ws.onclose = () => {
      if (retries < maxRetries) {
        retries++;
        const delay = Math.min(1000 * Math.pow(2, retries), 30000);
        setTimeout(connect, delay);
      }
    };
    
    ws.onopen = () => { retries = 0; };
    return ws;
  }
  
  return connect();
}
\`\`\`

## Performance Considerations

| Metric | Before Optimization | After Optimization |
|--------|--------------------|--------------------|
| Message Latency | ~200ms | ~45ms |
| Max Connections | 500 | 5,000 |
| Memory Usage | 512MB | 128MB |
| Reconnect Time | 10s | < 2s |

Key takeaways:
1. **Use binary frames** for large payloads instead of JSON
2. **Implement heartbeat pings** to detect stale connections
3. **Batch database writes** to reduce I/O overhead

## Conclusion

Building real-time systems is challenging but rewarding. The key is to plan for failure , connections will drop, servers will restart, and clients will misbehave. Design for resilience from day one.
`,
    },
    ar: {
      title: "بناء نظام محادثة فوري باستخدام WebSockets",
      excerpt:
        "نظرة معمقة على تنفيذ نظام محادثة فوري قابل للتوسع باستخدام WebSockets و Node.js و React , دروس مستفادة من بيئة الإنتاج.",
      content: `
## المقدمة

التواصل الفوري هو جوهر تطبيقات الويب الحديثة. في هذا المقال، سأشرح كيف بنيت نظام محادثة جاهز للإنتاج لمنصة تعليمية تتعامل مع آلاف الاتصالات المتزامنة.

## جدول المحتويات

- نظرة عامة على البنية
- إعداد خادم WebSocket
- التكامل من جانب العميل
- التعامل مع إعادة الاتصال
- اعتبارات الأداء

## نظرة عامة على البنية

يتبع النظام بنية بسيطة لكنها فعالة:

\`\`\`
العميل (React) <--WebSocket--> الخادم (Node.js) <---> PostgreSQL
\`\`\`

يتم حفظ كل رسالة في قاعدة البيانات وبثها في الوقت الفعلي للعملاء المتصلين.

## إعداد خادم WebSocket

إليك الإعداد الأساسي للخادم:

\`\`\`javascript
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const clients = new Map();

wss.on('connection', (ws, req) => {
  const userId = getUserFromToken(req);
  clients.set(userId, ws);

  ws.on('message', async (data) => {
    const message = JSON.parse(data);
    
    await db.query(
      'INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3)',
      [userId, message.to, message.content]
    );

    const recipient = clients.get(message.to);
    if (recipient?.readyState === WebSocket.OPEN) {
      recipient.send(JSON.stringify({
        from: userId,
        content: message.content,
        timestamp: new Date().toISOString()
      }));
    }
  });

  ws.on('close', () => clients.delete(userId));
});

server.listen(3001);
\`\`\`

## اعتبارات الأداء

| المقياس | قبل التحسين | بعد التحسين |
|--------|--------------------|--------------------|
| زمن الرسالة | ~200مللي ثانية | ~45مللي ثانية |
| أقصى اتصالات | 500 | 5,000 |
| استخدام الذاكرة | 512MB | 128MB |

## الخلاصة

بناء الأنظمة الفورية تحدٍ مجزي. المفتاح هو التخطيط للفشل , الاتصالات ستنقطع، والخوادم ستعاد تشغيلها. صمم من أجل المرونة منذ اليوم الأول.
`,
    },
  },
  {
    slug: "nextjs-prisma-lms-architecture",
    date: "2025-11-20",
    readTime: "10 min",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Architecture"],
    en: {
      title:
        "Architecting a Learning Management System with Next.js and Prisma",
      excerpt:
        "How I designed and built a full-featured LMS handling 250+ students with video hosting, exams, gamification, and role-based access.",
      content: `
## Introduction

Building a Learning Management System (LMS) from scratch taught me more about software architecture than any course ever could. Here's how I designed El-Ameed LMS to be scalable, maintainable, and user-friendly.

## Table of Contents

- Database Design
- Authentication & Authorization
- Video Hosting Strategy
- Exam Engine
- Gamification System

## Database Design

The Prisma schema is the backbone of the application:

\`\`\`prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  role      Role     @default(STUDENT)
  profile   Profile?
  courses   Enrollment[]
  exams     ExamAttempt[]
  points    Int      @default(0)
  createdAt DateTime @default(now())
}

model Course {
  id          String       @id @default(cuid())
  title       String
  description String?
  lessons     Lesson[]
  enrollments Enrollment[]
  exams       Exam[]
}

model Lesson {
  id       String  @id @default(cuid())
  title    String
  videoUrl String
  duration Int
  order    Int
  courseId  String
  course   Course  @relation(fields: [courseId], references: [id])
}

enum Role {
  STUDENT
  INSTRUCTOR
  ADMIN
}
\`\`\`

## Authentication & Authorization

I implemented role-based access control using Next.js middleware:

\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req });
  const path = req.nextUrl.pathname;

  // Admin routes
  if (path.startsWith('/admin') && token?.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  // Instructor routes
  if (path.startsWith('/instructor') && 
      !['ADMIN', 'INSTRUCTOR'].includes(token?.role)) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}
\`\`\`

## Video Hosting Strategy

Instead of self-hosting videos (expensive and complex), I used a hybrid approach:

1. **Upload**: Videos uploaded to cloud storage via signed URLs
2. **Transcoding**: Webhook triggers transcoding pipeline
3. **Delivery**: HLS streaming via CDN for adaptive bitrate

\`\`\`typescript
async function getSignedUploadUrl(fileName: string) {
  const key = \`videos/\${Date.now()}-\${fileName}\`;
  
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    ContentType: 'video/mp4',
  });

  const url = await getSignedUrl(s3Client, command, { 
    expiresIn: 3600 
  });

  return { url, key };
}
\`\`\`

## Exam Engine

The exam system supports multiple question types with auto-grading:

\`\`\`typescript
interface Question {
  id: string;
  type: 'mcq' | 'true-false' | 'short-answer';
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

function gradeExam(answers: Record<string, string>, questions: Question[]) {
  let score = 0;
  const results = questions.map(q => {
    const isCorrect = Array.isArray(q.correctAnswer)
      ? q.correctAnswer.includes(answers[q.id])
      : answers[q.id] === q.correctAnswer;
    
    if (isCorrect) score += q.points;
    
    return { questionId: q.id, isCorrect, points: isCorrect ? q.points : 0 };
  });

  return { score, total: questions.reduce((s, q) => s + q.points, 0), results };
}
\`\`\`

## Gamification System

Points and leaderboards increased student engagement by 35%:

| Action | Points |
|--------|--------|
| Complete a lesson | 10 |
| Pass an exam (> 80%) | 50 |
| Perfect score | 100 |
| Daily login streak (7 days) | 25 |
| Help a peer (instructor award) | 30 |

## Conclusion

The key architectural decisions , Prisma for type-safe database access, Next.js for full-stack capabilities, and a modular exam engine , made it possible to ship a production-quality LMS in under 3 months.
`,
    },
    ar: {
      title: "تصميم نظام إدارة تعلم باستخدام Next.js و Prisma",
      excerpt:
        "كيف صممت وبنيت نظام إدارة تعلم متكامل يخدم أكثر من 250 طالب مع استضافة فيديو واختبارات ونظام نقاط.",
      content: `
## المقدمة

بناء نظام إدارة التعلم (LMS) من الصفر علمني عن هندسة البرمجيات أكثر من أي دورة تعليمية. إليك كيف صممت نظام العميد ليكون قابلاً للتوسع وسهل الصيانة.

## جدول المحتويات

- تصميم قاعدة البيانات
- المصادقة والتفويض
- استراتيجية استضافة الفيديو
- محرك الاختبارات

## تصميم قاعدة البيانات

مخطط Prisma هو العمود الفقري للتطبيق:

\`\`\`prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  role      Role     @default(STUDENT)
  profile   Profile?
  courses   Enrollment[]
  points    Int      @default(0)
  createdAt DateTime @default(now())
}

model Course {
  id          String       @id @default(cuid())
  title       String
  lessons     Lesson[]
  enrollments Enrollment[]
  exams       Exam[]
}

enum Role {
  STUDENT
  INSTRUCTOR
  ADMIN
}
\`\`\`

## محرك الاختبارات

يدعم نظام الاختبارات أنواعاً متعددة من الأسئلة مع التصحيح التلقائي:

\`\`\`typescript
function gradeExam(answers: Record<string, string>, questions: Question[]) {
  let score = 0;
  const results = questions.map(q => {
    const isCorrect = answers[q.id] === q.correctAnswer;
    if (isCorrect) score += q.points;
    return { questionId: q.id, isCorrect, points: isCorrect ? q.points : 0 };
  });
  return { score, total: questions.reduce((s, q) => s + q.points, 0), results };
}
\`\`\`

## نظام النقاط

| الإجراء | النقاط |
|--------|--------|
| إكمال درس | 10 |
| اجتياز اختبار (> 80%) | 50 |
| درجة كاملة | 100 |
| سلسلة دخول يومية (7 أيام) | 25 |

## الخلاصة

القرارات المعمارية الأساسية , Prisma للوصول الآمن لقاعدة البيانات، و Next.js للقدرات الكاملة , جعلت من الممكن إطلاق نظام LMS بجودة إنتاجية في أقل من 3 أشهر.
`,
    },
  },
  {
    slug: "react-performance-optimization-guide",
    date: "2025-09-05",
    readTime: "6 min",
    tags: ["React", "Performance", "TypeScript"],
    en: {
      title: "React Performance Optimization: Patterns I Use in Production",
      excerpt:
        "Practical patterns for optimizing React applications , from memo strategies to virtualization and bundle splitting.",
      content: `
## Introduction

Performance isn't an afterthought , it's a feature. Here are the patterns I consistently apply to keep React applications fast and responsive.

## Table of Contents

- Memoization Done Right
- List Virtualization
- Code Splitting
- Image Optimization

## Memoization Done Right

The most common mistake is over-memoizing. Here's when \`useMemo\` and \`useCallback\` actually help:

\`\`\`tsx
// ❌ Don't: Memoizing cheap computations
const fullName = useMemo(() => first + ' ' + last, [first, last]);

// ✅ Do: Memoizing expensive computations
const sortedData = useMemo(() => {
  return data
    .filter(item => item.active)
    .sort((a, b) => b.score - a.score)
    .map(item => ({ ...item, rank: calculateRank(item) }));
}, [data]);

// ✅ Do: Stabilizing references for child components
const handleSubmit = useCallback(async (values: FormValues) => {
  await api.submit(values);
  refetch();
}, [refetch]);
\`\`\`

## List Virtualization

For lists with 100+ items, virtualization is essential:

\`\`\`tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: virtualItem.start,
              height: virtualItem.size,
              width: '100%',
            }}
          >
            <ItemRow item={items[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

## Code Splitting

Split by route and by feature:

\`\`\`tsx
import { lazy, Suspense } from 'react';

// Route-level splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Feature-level splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

## Image Optimization

| Technique | Impact | Effort |
|-----------|--------|--------|
| Lazy loading | High | Low |
| WebP format | Medium | Low |
| Responsive srcset | High | Medium |
| Blur placeholder | Medium | Medium |
| CDN delivery | High | Low |

Simple lazy loading implementation:

\`\`\`tsx
function OptimizedImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative">
      {!loaded && <div className="animate-pulse bg-muted rounded" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={loaded ? 'opacity-100' : 'opacity-0'}
      />
    </div>
  );
}
\`\`\`

## Conclusion

Focus on measuring first, optimizing second. Use React DevTools Profiler and Lighthouse to identify real bottlenecks before applying these patterns.
`,
    },
    ar: {
      title: "تحسين أداء React: أنماط أستخدمها في الإنتاج",
      excerpt:
        "أنماط عملية لتحسين تطبيقات React , من استراتيجيات الحفظ إلى التقسيم الافتراضي وتقسيم الحزم.",
      content: `
## المقدمة

الأداء ليس فكرة لاحقة , إنه ميزة. إليك الأنماط التي أطبقها باستمرار للحفاظ على تطبيقات React سريعة ومتجاوبة.

## جدول المحتويات

- الحفظ بالشكل الصحيح
- التقسيم الافتراضي للقوائم
- تقسيم الكود

## الحفظ بالشكل الصحيح

الخطأ الأكثر شيوعاً هو الإفراط في الحفظ:

\`\`\`tsx
// ❌ لا تفعل: حفظ العمليات البسيطة
const fullName = useMemo(() => first + ' ' + last, [first, last]);

// ✅ افعل: حفظ العمليات المكلفة
const sortedData = useMemo(() => {
  return data
    .filter(item => item.active)
    .sort((a, b) => b.score - a.score)
    .map(item => ({ ...item, rank: calculateRank(item) }));
}, [data]);
\`\`\`

## تقسيم الكود

\`\`\`tsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

## تحسين الصور

| التقنية | التأثير | الجهد |
|-----------|--------|--------|
| التحميل الكسول | عالي | منخفض |
| صيغة WebP | متوسط | منخفض |
| srcset المتجاوب | عالي | متوسط |

## الخلاصة

ركز على القياس أولاً، والتحسين ثانياً. استخدم React DevTools Profiler و Lighthouse لتحديد الاختناقات الحقيقية قبل تطبيق هذه الأنماط.
`,
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
