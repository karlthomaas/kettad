'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { type ChangeEvent, useState } from 'react'

import type { DiscType } from '@/app/search/page'
import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { DiscListCard } from '@/components/molecules/disc-list-card'

const matchesSearch = (disc: DiscType, search: string) => {
  const searchTerms = search.toLowerCase().split(' ')
  const discName = disc.name.toLowerCase()
  const discBrand = disc.brand.toLowerCase()

  if (searchTerms.length === 1) {
    return discName.startsWith(searchTerms[0]) || discBrand.startsWith(searchTerms[0])
  }
  if (searchTerms.length === 2) {
    return (
      (discName.startsWith(searchTerms[0]) && discBrand.startsWith(searchTerms[1])) ||
      (discBrand.startsWith(searchTerms[0]) && discName.startsWith(searchTerms[1]))
    )
  }
  return false
}

export const SearchPage = ({ results }: { results: DiscType[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const itemsPerPage = 10
  const startIndex = (currentPage - 1) * itemsPerPage

  /**
   * Filter the discs based on the search query and pagination
   */
  const filteredDiscs = results.filter((disc) => matchesSearch(disc, search))

  const paginatedDiscs = filteredDiscs.slice(startIndex, startIndex + itemsPerPage)

  const totalDiscsCount = filteredDiscs.length

  const paginatedDiscsCount = paginatedDiscs.length

  const totalPages = Math.ceil(filteredDiscs.length / itemsPerPage)

  const scrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    scrollTop()
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
    scrollTop()
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col space-y-3 px-1'>
        <Input
          value={search}
          onChange={handleSearch}
          className='h-[50px] w-full rounded-xl bg-card text-lg sm:w-full'
          placeholder='Search disc'
        />
        <h3 className='text-sm text-muted-foreground'>{totalDiscsCount} discs found</h3>
      </div>
      <ul className='grid gap-4 md:grid-cols-2'>
        {paginatedDiscs.map((disc, index) => (
          <DiscListCard
            disc={disc}
            key={disc.id}
            oddLast={paginatedDiscsCount % 2 !== 0 && index === paginatedDiscsCount - 1}
          />
        ))}
      </ul>
      {totalPages > 1 && (
        <div className='flex gap-4 px-2'>
          <Button
            onClick={handlePreviousPage}
            className='w-full'
            disabled={currentPage === 1}
            aria-label='Previous page'
          >
            <ArrowLeft />
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className='w-full'
            aria-label='Next page'
          >
            <ArrowRight />
          </Button>
        </div>
      )}
    </div>
  )
}
