<template>
  <div class="flex h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500 certTitlefadein">
          Please select subjects
        </h1>
      </div>
      <div class="grid grid-cols-5 grid-flow-row gap-x-12 gap-y-12 mt-16">
        <div v-for="i in subjects" :key="i.id">
          <nuxt-link :to="i.to">
            <a class="text-xl">
              {{ i.title }}
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['pageGuard'],
  data () {
    return {
      subjects: [
        {
          id: 1,
          title: 'คณิตศาสตร์',
          to: '/exam/subj/mth'
        },
        {
          id: 2,
          title: 'ฟิสิกส์',
          to: '/exam/subj/phy'
        },
        {
          id: 3,
          title: 'ชีววิทยา',
          to: '/exam/subj/bio'
        },
        {
          id: 4,
          title: 'สังคมศึกษา',
          to: '/exam/subj/soc'
        },
        {
          id: 5,
          title: 'ไทย',
          to: '/exam/subj/tha'
        },
        {
          id: 6,
          title: 'อังกฤษ',
          to: '/exam/subj/eng'
        },
        {
          id: 7,
          title: 'สุขศึกษา',
          to: '/exam/subj/s1'
        },
        {
          id: 8,
          title: 'พลศึกษา',
          to: '/exam/subj/s2'
        },
        {
          id: 9,
          title: 'ฟิสิกส์ - 2560',
          to: '/exam/subj/phy2560'
        },
        {
          id: 10,
          title: 'วิทยาศาสตร์',
          to: '/exam/subj/sci'
        },
        {
          id: 11,
          title: 'ดาราศาสตร์',
          to: '/exam/subj/ast'
        },
        {
          id: 12,
          title: 'คณิตศาสตร์ - 2560',
          to: '/exam/subj/mth2560'
        },
        {
          id: 13,
          title: 'สังคมศึกษา - thk',
          to: '/exam/subj/socThk'
        },
        {
          id: 14,
          title: 'เทคโนโลยี',
          to: '/exam/subj/techno'
        }
      ]
    }
  },
  head: {
    title: 'Please select your subjects'
  }
}
</script>
