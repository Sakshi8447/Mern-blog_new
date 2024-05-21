import { Button} from 'flowbite-react'


export default function Projects() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center m-4 p-8 bg-pink-400 my-7 text-white rounded-lg'>
            Sakshi's Projects
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6 pb-7'>
            <p>
            I'm Sakshi Pathak, a full stack web developer skilled in HTML, CSS, JavaScript, Node.js, React.js, and various other frameworks. I have extensive experience creating a range of web applications and projects.             </p>

            <p>
            To see my work, please visit my GitHub repository. My passion for coding drives me to continuously learn and innovate, ensuring I stay updated with the latest industry trends and technologies.

            </p>

            {/* <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p> */}
          </div>
          <div className='text-md text-gray-500 flex w-70% flex-col gap-6 items-center text-center justify-center'>
          <a href="https://github.com/Sakshi8447" >
      <Button outline gradientDuoTone="purpleToPink" >
        Github
      </Button>
      </a>
</div>
        </div>
      </div>
    </div>
  );
}
