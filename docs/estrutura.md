---
sidebar_position: 2
---

# Stack Tecnológica

A AIDE é uma **aplicação móvel React Native** construída com **Expo**, que permite desenvolvimento multiplataforma para iOS, Android e Web. Esta página documenta as principais tecnologias utilizadas no projeto.

---

## Framework Base

### **Expo**
Plataforma de desenvolvimento React Native com ferramentas unificadas para build, deploy e atualizações OTA.
Suporta iOS, Android e Web com nova arquitetura React Native (Fabric & TurboModules).

### **React Native**
Framework para desenvolvimento mobile nativo com React, oferecendo performance nativa e acesso completo a APIs do dispositivo.

### **React 19**
Biblioteca UI com otimizações do compilador React 19 e concurrent features para melhor performance.

### **TypeScript**
Verificação estática de tipos em modo strict, garantindo segurança e qualidade do código.

---

## Estilo e Interface

### **NativeWind**
Framework CSS utility-first para React Native (Tailwind CSS adaptado), type-safe e com suporte para modo escuro.
Tema personalizado inclui fontes Safiro e Open Sans, paleta de cores AIDE completa e sistema de design consistente.

### **Componentes Visuais**
- **Expo Image**: Componente otimizado com cache automático
- **React Native SVG**: Renderização de gráficos e ícones vetoriais
- **Expo Symbols**: SF Symbols (iOS) e Material Symbols (Android)
- **@expo/vector-icons**: Biblioteca de ícones (FontAwesome, Ionicons, MaterialIcons)

### **Gráficos**
- **React Native Gifted Charts**: Gráficos modernos e interativos
- **React Native Chart Kit**: Visualizações alternativas

---

## Navegação

### **Expo Router**
Sistema de routing baseado em ficheiros (similar ao Next.js) com deep linking, type-safe routes e code splitting automático.
Rotas principais: `index`, `login`, `register`, `complete-profile`, `terms-of-service`.

### **React Navigation**
Primitivas de navegação para bottom tabs, stack navigation e elementos UI reutilizáveis.

---

## Gestão de Estado

### **Redux Toolkit**
Estado global centralizado e imutável com DevTools integrado e arquitetura baseada em slices.

### **TanStack React Query**
Gestão de dados do servidor com cache automático, refetch em background e atualizações otimistas.

### **Axios**
Cliente HTTP para comunicação com APIs, com interceptores e transformação automática de JSON.

---

## Interações e Animações

### **React Native Reanimated**
Animações de alta performance a 60 FPS no thread nativo, com worklets e animações de spring/timing/layout.

### **React Native Gesture Handler**
Sistema de gestos nativos (pan, pinch, rotate, tap) processados no thread nativo com integração perfeita ao Reanimated.

### **Expo Haptics**
Feedback tátil para melhorar a experiência do utilizador.

---

## Formulários e Validação

### **React Hook Form**
Gestão performante de formulários com re-renders mínimos, validação integrada e suporte completo para TypeScript.

### **Zod**
Validação de schemas TypeScript-first com verificação de tipos em runtime e integração com React Hook Form.

---

## Qualidade de Código

### **ESLint**
Linter para manter qualidade do código com preset Expo e integração com Prettier.

### **Prettier**
Formatação automática de código com estilo consistente e plugin para ordenar classes Tailwind.

### **Lefthook**
Git hooks automatizados para lint, formatação e verificação de tipos em pre-commit e pre-push.

### **Jest**
Framework de testes com preset React Native, relatórios de cobertura e suporte TypeScript completo.

---

## Build e Deploy

### **Expo Application Services (EAS)**
Plataforma de build e deploy com perfis para development (debug) e production (stores).
Inclui versionamento automático e updates over-the-air.

### **Metro**
Bundler JavaScript para React Native com bundling rápido, HMR e suporte para web.
