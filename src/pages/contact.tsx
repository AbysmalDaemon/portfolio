import { Layout } from '~/layouts';

export default function ContactPage() {
  return (
    <Layout.Default seo={{ title: 'Contact' }}>
      <div className="min-h-screen flex items-center justify-center py-16 px-6">
        <form
          action="https://formspree.io/f/xzzjedbg"
          method="POST"
          className="relative p-6 rounded-lg border-2 border-gray-200 
                     dark:border-gray-600 bg-gray-50 bg-opacity-75 
                     dark:bg-gray-900 dark:bg-opacity-75 
                     backdrop-filter backdrop-blur-sm shadow-lg max-w-2xl w-full"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Me
          </h1>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 
                           backdrop-blur-sm shadow-sm px-4 py-2 text-gray-900 dark:text-white 
                           focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 
                           backdrop-blur-sm shadow-sm px-4 py-2 text-gray-900 dark:text-white 
                           focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 
                           backdrop-blur-sm shadow-sm px-4 py-2 text-gray-900 dark:text-white 
                           focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full inline-flex justify-center items-center 
                       px-4 py-2 border border-transparent text-sm font-medium rounded-md 
                       shadow-sm text-white bg-blue-600 hover:bg-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout.Default>
  );
}
