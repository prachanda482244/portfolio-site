import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
const Contacts = () => {
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3di3m7q', 'template_4xxvkvo', formRef.current, {
                publicKey: 'L9QGZIc1lnT8XMoSG',
            })

            .then(
                () => {
                    setSuccess(true)
                    formRef.current.reset();
                },
                () => {
                    setError(true)
                },
            );
    };

    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: .2
            }
        },
    }
    const leftVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                // delay: 4,
                staggerChildren: .1
            }
        },
    }


    const formVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delay: 4.5,
                duration: 3
            }
        }
    }

    setTimeout(() => {
        setError(false)
        setSuccess(false)
    }, 2000);
    return (
        <div className=' flex flex-col md:h-[130vh] gap-2 p-10'>
            <div className='sticky bg-gradient-to-b from-[#0c0c1d] to-[#111132] top-0 left-0'>
                <h1 style={{ textShadow: '2px 2px 10px blue' }} className=' text-3xl md:text-5xl uppercase p-2 text-center text-semibold'>&lt;Contact Me /&gt;</h1>
            </div>
            <motion.div variants={variants} initial="initial" whileInView="animate" className="contact p-3 md:p-0  w-full md:max-w-6xl   m-auto flex flex-col md:flex-row items-center  gap-10">
                <motion.div variants={variants} className="textContainer flex flex-col gap-4 text-center items-center md:items-start md:text-left mt-20 md:mt-0 md:gap-8 flex-1">
                    <h1 className="text-3xl md:text-7xl md:leading-[90px] font-bold">Lets Work Together</h1>
                    <motion.div variants={leftVariants} className="item">
                        <motion.h1 variants={leftVariants} className="font-semibold"> Mail:</motion.h1>
                        <span className="font-light">pralhadrana123@gmail.com</span>
                    </motion.div>
                    <motion.div variants={leftVariants} className="item">
                        <motion.h1 variants={leftVariants} className="font-semibold">Address:</motion.h1>
                        <span className="font-light">Kathmandu, Nepal</span>
                    </motion.div>
                    {/* <motion.div variants={variants} className="item">
                    <h1>Phone</h1>
                    <span>+977 9860938293</span>
                </motion.div> */}

                </motion.div>
                <div className="formContainer  w-[90vw] p-10 md:p-0  relative stroke-blue-500 flex-1" >
                    <motion.div className=' -z-10 absolute h-ful w-full'
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2
                        }}
                    >

                        <svg viewBox="0 0 24 24" height="500px" width="500px" fill="none"
                            className='w-[80%]  h-full'
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 1, duration: 15 }}

                                d="M20.2945 10.2859C20.7902 9.92214 21.0574 9.45283 21.0664 8.97375C21.0816 8.16429 20.5363 6.69501 17.0509 5.11295C13.6314 3.56077 10.5872 3.53726 6.82663 5.05965C4.93161 5.82682 3.97528 6.57481 3.48588 7.21208C3.01022 7.83146 2.94264 8.38826 2.93337 8.88161C2.9244 9.35906 3.17218 9.82678 3.64976 10.1928C4.12797 10.5593 4.81609 10.8029 5.60244 10.8074C5.93623 10.8093 6.13734 10.7119 6.27526 10.5821C6.42474 10.4413 6.54227 10.2219 6.62538 9.91601C6.76979 9.38451 6.77652 8.7431 6.78289 8.13614C6.78409 8.02235 6.78527 7.90977 6.78734 7.79935C6.78906 7.70788 6.81763 7.61894 6.86949 7.54358C7.36255 6.82713 8.23012 6.3416 9.18455 6.03524C10.151 5.72502 11.2715 5.57726 12.3545 5.58348C13.4356 5.5897 14.5087 5.74954 15.3756 6.07683C16.224 6.39712 16.98 6.92037 17.2321 7.72316C17.2472 7.7712 17.2544 7.82136 17.2534 7.87171C17.2513 7.98221 17.2483 8.09484 17.2452 8.20866C17.2288 8.81566 17.2115 9.45646 17.3357 9.9887C17.4072 10.295 17.5157 10.5125 17.6565 10.6516C17.7854 10.779 17.9792 10.8786 18.3131 10.8805C19.0994 10.885 19.7991 10.6494 20.2945 10.2859ZM20.8466 11.0383C20.1757 11.5306 19.2765 11.8193 18.3078 11.8137C17.7642 11.8106 17.3257 11.6367 17.0006 11.3154C16.6874 11.006 16.52 10.5998 16.4269 10.2008C16.2724 9.53878 16.2952 8.75135 16.3127 8.15161C16.3148 8.07727 16.3169 8.00581 16.3186 7.93783C16.1715 7.57024 15.7583 7.21883 15.046 6.9499C14.3104 6.67219 13.3535 6.52246 12.3492 6.51669C11.3469 6.51092 10.3267 6.64873 9.46977 6.92381C8.66742 7.18135 8.06136 7.54164 7.71829 7.96564L7.71691 8.11454C7.71179 8.71447 7.70507 9.50141 7.52595 10.1607C7.41799 10.558 7.23631 10.959 6.91498 11.2615C6.58209 11.5749 6.14078 11.7437 5.59707 11.7406C4.62845 11.735 3.73775 11.436 3.08207 10.9335C2.42575 10.4305 1.98457 9.70266 2.00032 8.86409C2.01156 8.26529 2.10157 7.48248 2.74574 6.64368C3.37617 5.82276 4.50193 4.99397 6.47644 4.19463C10.4549 2.58402 13.7661 2.59707 17.4366 4.26318C21.0414 5.89941 22.0252 7.61643 21.9994 8.99128C21.9837 9.82822 21.5171 10.5463 20.8466 11.0383ZM8.31041 10.6638C8.31041 9.34234 9.38165 8.2711 10.7031 8.2711H13.3835C14.7049 8.2711 15.7762 9.34234 15.7762 10.6638C15.7762 11.2346 16.1414 11.7414 16.6829 11.9219L17.1526 12.0784C18.2414 12.4414 18.9758 13.4603 18.9758 14.6079V17.3366C18.9758 18.8092 17.782 20.003 16.3094 20.003H7.77714C6.30457 20.003 5.11081 18.8092 5.11081 17.3366V14.6079C5.11081 13.4603 5.8452 12.4414 6.93397 12.0784L7.40363 11.9219C7.94515 11.7414 8.31041 11.2346 8.31041 10.6638ZM10.7031 9.33764C9.97068 9.33764 9.37695 9.93137 9.37695 10.6638C9.37695 11.6937 8.71793 12.608 7.7409 12.9337L7.27124 13.0902C6.61797 13.308 6.17734 13.9193 6.17734 14.6079V17.3366C6.17734 18.2202 6.8936 18.9365 7.77714 18.9365H16.3094C17.193 18.9365 17.9092 18.2202 17.9092 17.3366V14.6079C17.9092 13.9193 17.4686 13.308 16.8153 13.0902L16.3457 12.9337C15.3686 12.608 14.7096 11.6937 14.7096 10.6638C14.7096 9.93137 14.1159 9.33764 13.3835 9.33764H10.7031ZM10.4434 15.2035C10.4434 14.32 11.1597 13.6037 12.0432 13.6037C12.9268 13.6037 13.643 14.32 13.643 15.2035C13.643 16.0871 12.9268 16.8033 12.0432 16.8033C11.1597 16.8033 10.4434 16.0871 10.4434 15.2035ZM12.0432 12.5372C10.5706 12.5372 9.37687 13.7309 9.37687 15.2035C9.37687 16.6761 10.5706 17.8699 12.0432 17.8699C13.5158 17.8699 14.7095 16.6761 14.7095 15.2035C14.7095 13.7309 13.5158 12.5372 12.0432 12.5372Z" fill="none" ></motion.path>
                        </svg>
                    </motion.div>

                    <motion.form ref={formRef} variants={formVariants} onSubmit={sendEmail} className="flex  flex-col gap-2 ">
                        <input className=" py-1.5  md:py-3 px-6 bg-transparent text-white border border-white rounded-lg" type="text" required placeholder="Name" name='name' />
                        <input className=" py-1.5  md:py-3 px-6 bg-transparent text-white border border-white rounded-lg" type="email" required placeholder="Email" name="email" />
                        <textarea className=" py-1.5  md:py-3 px-6 bg-transparent text-white border border-white rounded-lg" rows="8" placeholder="Message" name="message"></textarea>
                        <button type='submit' className="bg-orange-500  transition-all delay-200 ease-in-out py-1 md:py-2 px-6 rounded-lg text-lg hover:bg-white hover:text-black font-semibold">Submit</button>

                        <p className={`text-center font-lg h-4 ${error ? 'text-red-800' : 'text-green-700'}`}>
                            {error && 'Error while sending the mail...!!!'}
                            {success && 'Mail send successfully...!!!'}
                        </p>
                    </motion.form>
                </div >
            </motion.div >
        </div>

    )
}

export default Contacts
