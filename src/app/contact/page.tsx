import React from 'react'


const page  = () => {
  return (
    <>
        <form 
            action={ process.env.NEXT_PUBLIC_FORM_URL } 
            method="post" 
            name="form1" 
            accept-charset="UTF-8"
            className='mt-24 w-3/4 mx-auto max-w-4xl'
        >
            <input type="hidden" name="key" value={ process.env.NEXT_PUBLIC_INPUT_ID } className='text-black'/>

            <h1 className='text-center font-bold text-4xl'>Contact Form</h1>
            
            <p>
                <span className='text-red-500 text-2xl font-bold'>*</span>
                Corporate Name
            </p>
            <p>
                <input name={ process.env.NEXT_PUBLIC_CORPORATE_ID } type="text" size={30} placeholder="Your Corporate Name" className='text-black rounded-lg border-solid border border-gray-600 shadow-lg p-3.5 w-full'/>
            </p>
            <p>
                <span className='text-red-500 text-2xl font-bold'>*</span>
                Your Name
            </p>
            <p className='flex justify-between'>
                <input name={ process.env.NEXT_PUBLIC_FIRST_NAME_ID } type="text" placeholder="First Name" className='text-black rounded-lg border-solid border border-gray-600 shadow-lg p-3.5 w-[49%]'/>
                <input name={ process.env.NEXT_PUBLIC_LAST_NAME_ID } type="text" placeholder="Last Name" className='text-black rounded-lg border-solid border border-gray-600 shadow-lg  p-3.5 w-[49%]'/>
            </p>

            <br />

            <p>
                <span className='text-red-500 text-2xl font-bold'>*</span>
                Mail Address
            </p>
            <p>
                <input name={ process.env.NEXT_PUBLIC_MAIL_ADDRESS_ID } type="text" size={30} placeholder="yourMailAddress@yourDomain.com" className='text-black rounded-lg border-solid border border-gray-600 shadow-lg p-3.5 w-full'/>
            </p>

            <br />

            <p>
                <span className='text-red-500 text-2xl font-bold'>*</span>
                Inquiry
            </p>
            <p>
                <textarea name={ process.env.NEXT_PUBLIC_INQUIRY_ID } cols={30} rows={5}  placeholder="Please fill in what you want to inquiry" className='text-black rounded-lg border-solid border border-gray-600 shadow-lg  p-3.5 w-full'></textarea>
            </p>

            <br />

            <p>
                <input name="submit" type="submit" value="Confirm" className='text-black rounded-lg border-solid border border-gray-600 shadow-lg  p-3.5 bg-slate-200 w-full cursor-pointer' />
            </p>

            <p>
                <a href={ process.env.NEXT_PUBLIC_FORM_MAIL_PROM_URL } target="_blank" id="powered">Powered by FormMailer.</a>
            </p>

            <input type="hidden" name="code" value="utf8" />
        </form>

    </>
  )
}

export default page