import React from 'react'
import LineGradient from '../component/LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from "framer-motion";
import SocialMediaIcons from '../component/SocialMedialIcons'
import { Email, Phone } from '@mui/icons-material'


const Contact = () => {
    const {
        register,
        trigger,
        formState:{errors}

    }= useForm();

    const onSubmit = async (e)=>{
        const isValid =await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }
    
  return (
    <section id='contact' className='py-48'>
        <motion.div 
                 
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}>
                    <div>
                <p className='font-playfair font-semibold text-4xl '>
                    <span className='text-red'>CONTACT ME</span>
                </p>
                <div className='flex  my-5'>
                <LineGradient width=' w-2/4'/>
                </div>
                </div>
              

                </motion.div>
                <div className='md:flex md:justify-between gap-16 mt-5'>
                <motion.div
                className='basis-1/2 '
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }}
                >
                    <div className='flex col-span-2 my-4 gap-5'>
                    <Email/>
                    <p>chabathapelo1@gmail.com</p>
                    
                    </div>
                    <div className='flex col-span-2 my-4 gap-5'>
                    <Phone/>
                    <p>0766465828</p>
                    </div>
                    
                    <div className='flex justify-start ml-0'>
                    <SocialMediaIcons/>
                    </div>
                    {/* <img src={require("../assets/landscape.jpg")} alt='landscape'/> */}
                    
                </motion.div>
                <motion.div
                className='basis-1/2 mt-10 md:mt-0'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}} variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }}
                >
                    <form 
                    target='_blank' onSubmit={onSubmit} 
                    action="https://formsubmit.co/chabathapelo1@gmail.com"
                    method='POST'
                    >
                        <input 
                        className='w-full bg-grey font-semibold text-deep-blue placeholder-opaque-black
                        p-3 '
                        type='text' placeholder='NAME' {...register("name",{
                            required:true,
                            maxLength:100,
                        })}/>
                        {errors.name && (
                            <p>
                                {errors.name.type === 'required' && "This field is required"}
                                {errors.name.type === "maxLength" && "Max length is 100 char"}
                            </p>
                        )}
                        <input 
                        className='w-full bg-grey font-semibold text-deep-blue placeholder-opaque-black
                        p-3 mt-5'
                        type='email' placeholder='EMAIL' {...register("email",{
                            required:true,
                           
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        />
                        {errors.name && (
                            <p>
                                {errors.email.type === 'required' && "This field is required"}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}
                        <textarea 
                       className='w-full bg-grey font-semibold text-deep-blue placeholder-opaque-black
                       p-3 mt-5'
                       type='text' placeholder='MESSAGE'
                       rows="4" cols="50"
                       {...register("message",{
                           required:true,
                           maxLength:2000,
                       })}
                        />
                        {errors.message && (
                            <p>
                              
                                {errors.message.type === "maxLength" && "Max length is 2000 char"}
                            </p>
                        )}
                        <button
                        type='submit'
                        className='p-5 bg-red font-semibold  text-deep-blue
                        mt-5 hover:bg-gradient-rainbow hover:text-white transition duration-500'
                        >
                            SEND ME A MESSAGE
                        </button>
                    </form>

                </motion.div>
                </div>
    </section>
  )
}

export default Contact