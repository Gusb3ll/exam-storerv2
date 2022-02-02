<template>
  <div class="flex h-screen">
    <div class="mx-auto">
      <div class="my-8">
        <h1 class="text-4xl text-center font-500 examIndexanim1">
          Select your subject
        </h1>
      </div>
      <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid-flow-row gap-x-12 gap-y-12 mt-16">
        <div v-for="i in subjects" :key="i.id">
          <nuxt-link :to="i.to">
            <div
              class="
                examIndexanim2
                text-center
                py-8
                px-4
                bg-white
                shadow-lg
                rounded-lg
                max-w-lg
                min-h-32
              "
            >
              <a class="xl:text-xl text-lg">
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
          title: 'คณิตศาสตร์ปรับปรุง 2560',
          to: '/exam/subj/mth'
        },
        {
          id: 2,
          title: 'ฟิสิกส์ปรับปรุง 2560 (ธรรมศาสตร์)',
          to: '/exam/subj/phy'
        },
        {
          id: 3,
          title: 'เคมี',
          to: '/exam/subj/chm'
        },
        {
          id: 4,
          title: 'ชีววิทยา',
          to: '/exam/subj/bio'
        },
        {
          id: 5,
          title: 'สังคมศึกษา (ธรรมศาสตร์)',
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
        {
          id: 9,
          title: 'วิทยาศาสตร์ (ชีวภาพ)',
          to: '/exam/subj/sci'
        },
        {
          id: 10,
          title: 'ดาราศาสตร์',
          to: '/exam/subj/ast'
        }
      ]
    }
  },
  head: {
    title: 'Select subject'
  },
  mounted () {
    this.examIndexanim()
  },
  methods: {
    examIndexanim () {
      this.$anime({
        targets: '.examIndexanim1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 775,
        delay: 0,
        easing: 'easeOutQuint'
      })
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
