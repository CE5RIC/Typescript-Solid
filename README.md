# Typescript-Solid
Learning the SOLID principles using Typescript and Parcel.

# SOLID TYPESCRIPT

Well, before we can dive in to this, it's important to understand that we are dealing with Object-Oriented-Programming here.
So I think it's necessary to go over the four pillars of Object-Oriented-Programming first, then we will attempt the SOLID PRINCIPLES.
I have been reading up on the four pillars these past days as well as gotten a thorough explanation from the coaches.
Now it's time to explain this concept in this README file to make sure/check if I really did understand all of it.
If I'm able to explain the four pillars to somebody who has no background in this whatsoever or let's say a 5-year-old,
I think we can agree that we accomplished our mission!

So Javascript is a multi-paradigm language and can be written following different programming paradigms.
A programming paradigm is essentially a bunch of rules that you follow when writing code, to help you solve a particular problem.
That's what the four pillars are. They're software design principles to help you write clean Object-Oriented code.
The four pillars are: 

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism


### Abstraction

In object-oriented design, programs often extremely large. Separate objects communicate with each other a lot.
So imagine maintaining a codebase like this for years, with some changes along the way. It's difficult.
Abstraction is a concept which helps in this regard. 

Think - a coffee machine, it does a lot of stuff and makes
noises under the hood. All you have to do is put coffee and press a button. Preferably, this mechanism should be easy to use
and rarely change over time. 

This principle is all about hiding away the "ugly parts" of your code.
Going further on our example of the coffee machine, below you can find a great example which I found browsing:

How to Create it With Abstraction

    Have a button with the title "Make coffee"

How to Create it Without Abstraction

    Have a button with the title "Boil the water"
    Have a button with the title "Add the cold water to the kettle"
    Have a button with the title "Add 1 spoon of ground coffee to a clean cup"
    Have a button with the title "Clean any dirty cups"
    And all the other buttons


### Encapsulation

Say we have a program. It has a few logically different objects which communicate with each other — according to the rules defined in the program.

Encapsulation is achieved when each object keeps its state private, inside a class. Other objects don’t have direct access to this state. Instead, they can only call a list of public functions — called methods.

So, the object manages its own state via methods — and no other class can touch it unless explicitly allowed. If you want to communicate with the object, you should use the methods provided. But (by default), you can’t change the state.

Let’s say we’re building a tiny Sims game. There are people and there is a cat. They communicate with each other. We want to apply encapsulation, so we encapsulate all “cat” logic into a Cat class. It may look like this:


![](img/cat.png)

You can feed the cat. But you can’t directly change how hungry the cat is.
Here the “state” of the cat is the private variables: mood, hungry and energy. It also has a private method meow(). It can call it whenever it wants, the other classes can’t tell the cat when to meow.

What they can do is defined in the public methods sleep(), play() and feed(). Each of them modifies the internal state somehow and may invoke meow(). Thus, the binding between the private state and public methods is made.

This is encapsulation.
