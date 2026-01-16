---
sidebar_position: 3
---

# Processo de Desenvolvimento

O desenvolvimento da AIDE segue uma metodologia baseada em **Sprints**, utilizando a plataforma **Jira** como ferramenta de gestão de projetos e o **GitHub** para controlo de versões e colaboração de código.

---

## Metodologia Ágil

### **Sprints**
O projeto é desenvolvido em ciclos iterativos chamados sprints, permitindo entregas incrementais e feedback contínuo.

- **Duração**: Cada sprint tem uma duração definida pela equipa
- **Planeamento**: No início de cada sprint, a equipa seleciona as tarefas prioritárias do backlog
- **Weekly Standups**: Reuniões curtas para sincronização semanal da equipa
- **Retrospetivas**: Análise do sprint anterior para melhoria contínua

---

## Gestão de Projetos com Jira

### **Workflow de Tarefas**
Cada tarefa na estrutura do nosso Jira passa pelos seguintes estados:

| Estado | Descrição |
|--------|-----------|
| **To Do** | Tarefa no backlog, pronta para ser iniciada |
| **In Progress** | Trabalho em desenvolvimento ativo |
| **Done** | Tarefa concluída e validada |

---

## Integração com GitHub

### **Ligação Jira-GitHub**
A integração entre o Jira e o GitHub permite:

- **Rastreabilidade**: Commits e PRs associados automaticamente às tarefas
- **Atualizações automáticas**: O estado das tarefas é atualizado com base na atividade do GitHub
- **Visibilidade**: Links diretos entre issues do Jira e código no GitHub


### **Branching Strategy**
Utilizamos uma estratégia de branches baseada em um modelo de **GitFlow modificado**:

```
main (production)
├── dev (staging)
│   ├── AIDE-123-login-biometrico
│   ├── AIDE-124-dashboard-widgets
│   └── AIDE-125-navegacao-melhorada
└── hotfix/corrigir-bug-critico
```

- **main**: Ambiente de **produção**, código sempre estável e pronto para deploy
- **dev**: Ambiente de **staging**, branch de integração para testar novas funcionalidades
- **AIDE-**/**: Branches para desenvolvimento de **novas funcionalidades** (ex: `AIDE-123-login-biometrico`)
- **hotfix/**: Branches para **correções de emergência** que vão diretamente para produção

> [!IMPORTANT]
> As branches **main** e **dev** estão protegidas e bloqueadas. Qualquer alteração nestas branches requer a criação de um **Pull Request** aprovado.

### **Pull Requests**
Todas as alterações passam por revisão de código:

1. Criar PR com descrição clara do que foi alterado
2. Associar a tarefa do Jira correspondente no título do PR
3. Aguardar revisão de pelo menos um membro da equipa
4. Resolver comentários e sugestões
5. Merge após aprovação


---

## Boas Práticas

### **Desenvolvimento**
- Manter commits pequenos e focados
- Escrever mensagens de commit descritivas
- Atualizar o status das tarefas no Jira regularmente
- Documentar decisões técnicas importantes

### **Colaboração**
- Comunicar bloqueios imediatamente
- Dar feedback construtivo nas revisões de código

### **Qualidade**
- Escrever testes para novas funcionalidades
- Manter a cobertura de código acima do mínimo definido
- Resolver warnings e erros de linting antes do commit
- Seguir os padrões de código estabelecidos

---