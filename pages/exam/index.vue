<template>
  <div class="flex h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500 examIndexanim1">
          Please select subjects
        </h1>
      </div>
      <div class="grid grid-cols-5 grid-flow-row gap-x-12 gap-y-12 mt-16">
        <div v-for="i in subjects" :key="i.id">
          <nuxt-link :to="i.to">
            <div
              class="
                examIndexanim2
                text-center
                py-4
                px-1
                bg-white
                shadow-lg
                rounded-lg
              "
            >
              <a class="text-xl">
                {{ i.title }}
              </a>
            </div>
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
          title: 'ฟิสิกส์ปรับปรุง 2560',
          to: '/exam/subj/phy'
        },
        {
          id: 3,
          title: 'ชีววิทยา',
          to: '/exam/subj/bio'
        },
        {
          id: 4,
          title: 'เคมี',
          to: '/exam/subj/chm'
        },
        {
          id: 5,
          title: 'สังคมศึกษา',
          to: '/exam/subj/soc'
        },
        {
          id: 6,
          title: 'ไทย',
          to: '/exam/subj/tha'
        },
        {
          id: 7,
          title: 'อังกฤษ',
          to: '/exam/subj/eng'
        },
        {
          id: 8,
          title: 'สุขศึกษา',
          to: '/exam/subj/s1'
        },
        // {
        //   id: 9,
        //   title: 'พลศึกษา',
        //   to: '/exam/subj/s2'
        // },
        // {
        //   id: 10,
        //   title: 'ฟิสิกส์ - 2560',
        //   to: '/exam/subj/phy2560'
        // },
        {
          id: 11,
          title: 'วิทยาศาสตร์ (ชีวภาพ)',
          to: '/exam/subj/sci'
        },
        {
          id: 12,
          title: 'ดาราศาสตร์',
          to: '/exam/subj/ast'
        }
        // {
        //   id: 13,
        //   title: 'สังคมศึกษา - thk',
        //   to: '/exam/subj/socThk'
        // },
        // {
        //   id: 14,
        //   title: 'เทคโนโลยี',
        //   to: '/exam/subj/techno'
        // }
      ]
    }
  },
  head: {
    title: 'Please select your subjects'
  },
  mounted () {
    this.examIndexanim1()
    this.examIndexanim2()
  },
  methods: {
    examIndexanim1 () {
      this.$anime({
        targets: '.examIndexanim1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
    },
    examIndexanim2 () {
      this.$anime({
        targets: '.examIndexanim2',
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 775,
        delay: (el, i) => 300 + i * 100,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>
