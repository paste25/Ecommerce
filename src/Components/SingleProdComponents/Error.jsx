import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const Error = ({errorParagraph, errorDialogue, errorDescription, handelErrorPopup}) => {
  let [isOpen, setIsOpen] = useState(true)

  function handelCloseBtn(){
    setIsOpen(false)
    handelErrorPopup()
  }

  return (
    <>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-6">
          <DialogTitle className="font-bold text-red-600">{errorDialogue}</DialogTitle>
          <Description>{errorDescription}</Description>
          <p>{errorParagraph}</p>
          <div className="flex gap-4">
            <button onClick={()=>handelCloseBtn()} className='border px-4 py-2 rounded'>Close</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </>
  )
}

export default Error
