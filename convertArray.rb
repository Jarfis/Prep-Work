def convertArray(theArray)
    newArray = []
    theArray.each do |i|
        newArray << i.length
    end
    return newArray
end

print convertArray(["five", "six", "apple"])