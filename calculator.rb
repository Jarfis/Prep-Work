def interface
    puts "Choose operation"
    puts "add, subtract, divide, multiply, exponent, finish"
    @toDo=gets.chomp
    storedValue=0
    trip=false
    
    loop do
        if @toDo=="finish"
            break
        end
        storedValue = send(@toDo, storedValue)
        puts "=#{storedValue}"
        puts "add, subtract, divide, multiply, exponent, finish"
        @toDo=gets.chomp
    end
    puts "total is #{storedValue}"
end

def add(num=0)
    print "#{num}+"
    temp = gets.chomp.to_f
    return num + temp
end

def subtract(num=0)
    print "#{num}-"
    temp = gets.chomp.to_f
    return num-temp
end

def multiply(num=0)
    print "#{num}x"
    temp = gets.chomp.to_f
    return num*temp
end

def divide(num=0)
    print "#{num}/"
    temp = gets.chomp.to_f
    return num/temp
end

def exponent(num=0)
    print "#{num}^"
    temp = gets.chomp.to_f
    return num**temp
end

interface