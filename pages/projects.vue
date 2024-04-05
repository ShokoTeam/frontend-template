<template>
  <div>Hello</div>
</template>

<script setup lang="ts">

const query = ref<string>('')

const form = ref({
  customer: '',
  status: '',
  team: ''
})

const projects = ref([
  {
    uid: '3e08c3b1-0833-441f-8061-ad3f2a7161f8',
    name: 'Some project',
    team_uid: 'a1814d82-9131-42c0-995e-00d321247b98',
    consumer_uid: null,
    inspector_uid: null,
    created_at: '2024-04-05T10:11:10.152217+00:00',
    tasksCount: 2
  },
  {
    uid: '3e08c3b1-3434-441f-8061-ad3f2a7161f8',
    name: 'Some project 2',
    team_uid: 'a1814d82-9131-42c0-995e-00d321247b98',
    consumer_uid: null,
    inspector_uid: null,
    created_at: '2024-04-05T10:11:10.152217+00:00',
    tasksCount: 2
  }
])
</script>
