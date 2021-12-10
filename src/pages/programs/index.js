import { Community } from '@/components/Community'
import { ReactComponent as PlayImage } from '@/img/play.svg'
import { ProgramsLayout } from '@/layouts/ProgramsLayout'
import { gradients } from '@/utils/gradients'
import styles from './index.module.css'

export default function ProgramsLandingPage() {
  return (
    <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
        Getting started with Java Programs
      </h1>
      <p className="text-2xl tracking-tight mb-10">
        Learn Java the way that best matches your learning style.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 xl:gap-8">
        <section className="flex">
          <div className="w-full relative text-white overflow-hidden rounded-xl flex shadow-lg">
            <div className={`w-full flex md:flex-row py-6 bg-gradient-to-br ${gradients.pink[0]}`}>
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-xl font-semibold mb-2 text-shadow text-white">Java Programs</h2>
                <p className="font-medium text-rose-100 dark:text-rose-50 text-shadow mb-4">
                  A bunch of Java programms for learning and practicing.
                </p>
                <a
                  href="/programs/introduction"
                  className="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-lg font-semibold py-2 px-4 inline-flex"
                >
                  Start learning
                </a>
              </div>
              <div className={`${styles.image} relative md:pl-16 xl:pl-20 hidden sm:block`}>
                <PlayImage className="absolute top-6 right-6 md:static overflow-visible" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block" />
          </div>
        </section>
      </div>
      <section>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

ProgramsLandingPage.layoutProps = {
  meta: {
    title: 'Programs',
  },
  Layout: ProgramsLayout,
}
