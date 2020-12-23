![wallpaper](image.png)

# Documentation of Custom Components for React

In this repo there are components to use in react made by me. To use the components correctly, some requirements must be followed

# Requirements and rules

## Files and directories required

* All of the components they are in the components branch organized by directories. In every directory there are the following files: the `*.js` file of the react component, the `*.scss` file for the component style, the `*.html` file for preview the component and a `README.md` for the specifications and requirements for it to work properly.

* If you use `create-react-app`, you need to create in the src directory two directories: one for the style (for example: named like: ***"style"***) and the second one for the images (for example named like: ***"img"***).

## Style

There are a two files that are required for the style of the components: `config.scss` and `style.scss` and every component has their own file for the style. In the `config.scss` there are the variables for the design system of your app. Every component use this variables in the style.

### Usage

1. Copy the `config.scss` and the `style.scss` files in the style directory.

1. For every component that you use in the project, copy the style file in the ***style*** directory and in the `style.scss` import the style file of the component. And this for every component you use.

1. Finally, compile the `style.scss` to `css`.