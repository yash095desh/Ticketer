import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div>
        <Form action="/search" className='relative'>
            <input type="text" name="q"
            className='w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 '
            placeholder='Search for Events...'
            />
            <Search className=' absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 w-5 h-5'/>
            <button
            type='submit'
            className=" absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-200 outline-none"
            >
                Search
            </button>
        </Form>
    </div>
  )
}

export default SearchBar