def removeDuplicates(theArray)
    newArray = theArray.select{|i|theArray.count(i) ==1}
    return newArray
end

puts removeDuplicates([1,2,2,3,4,4,5,6,6,7,7,7,8,9,9,9])