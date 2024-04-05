<template>
  <div
    class="flex flex-col w-full px-6 py-7"
  >
    <div v-if="!isLoading">
      <div class="text-gray-800 font-bold text-2xl">
        {{ project?.name }}
      </div>
      <div class="mt-4 mb-3">
        <div>
          Исполнители - {{ project?.consumer_uid ? project?.consumer_uid : 'нет исполнителей' }}
        </div>
        <div>
          Проверяющие - {{ project?.inspector_uid ? project?.inspector_uid : 'нет проверяющих' }}
        </div>
        <div>
          Срок исполнения - {{ project?.created_at }}
        </div>
      </div>

      <UiAccordion
        type="single"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <UiAccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <UiAccordionTrigger><span class="text-xl">{{ item.title }}</span></UiAccordionTrigger>
          <UiAccordionContent>
            <div>
              <div
                v-for="task in project?.tasks"
                :key="task.id"
              >
                {{ task.name }}
              </div>
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    </div>
    <div v-else>
      <UiSkeleton class="h-7 w-[15%]" />
      <UiSkeleton class="h-4 w-[15%] mt-6" />
      <UiSkeleton class="h-4 w-[15%] mt-2" />
      <UiSkeleton class="h-4 w-[25%] mt-2" />
      <UiSkeleton class="h-6 w-[5%] mt-7" />
      <UiSkeleton class="h-4 w-[80%] mt-5" />
      <UiSkeleton class="h-4 w-[85%] mt-2" />
      <UiSkeleton class="h-4 w-[75%] mt-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProject } from '~/entities/project/model'

const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: 'Задачи', content: 'Yes. It adheres to the WAI-ARIA design pattern.' }
]

definePageMeta({
  middleware: [
    'auth'
  ]
})

const route = useRoute()
const project = ref(null)
const isLoading = ref(false)
const { getProject } = useProject()

const handleProject = async () => {
  isLoading.value = true

  try {
    if (route.query.uid) {
      const res = await getProject(String(route.query.uid))
      project.value = res
    }
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await handleProject()
})
</script>
