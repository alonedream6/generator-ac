const generators = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, upperFirst } = require('lodash');
module.exports = class extends generators{
    //重写constructor方法，有些generator方法只有定义在构造方法内才有效
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    }
    initializing() {
        this.props = {};
        const msg = chalk.bgBlack.red.bold('\n welcome ac \n') + chalk.underline('https://github.com/hoc2019\n');
        this.log(yosay(msg));
    }
    configuring() {
        // this.config.save();
    }
    defaults() {
        // console.log("---------defaults---------");
    }
    installing() {
        this.npmInstall(['lodash'], { saveDev: true });
        // this.installDependencies();
    }
    // prompting 是问题集合，在调用this.prompt使其在运行yo的时候提出来
    async prompting() {
        const prompts =  [
            {
                type: 'input',
                name: 'author',
                message: '你的名字',
                store: true,
            },
            {
                type: 'list',
                name: 'type',
                message: '选择需要创建的类型',
                choices:[
                    {name: '页面', value: 'module'},
                    {name: '组件', value: 'component'},
                ]
            }
        ];
        this.props.answers = await this.prompt(prompts);
        const { type } = this.props.answers;
        if (type === 'module') {
            const answers = await this.prompt([
                {
                    type: 'input',
                    name: 'page',
                    message: '需要创建的页面页数',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: '需要创建的模板名',
                }
            ]);
            this.props.answers.name = answers.name;
            this.props.answers.page = answers.page;
        }
        if (type === 'component') {
            const answers = await this.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: '需要创建的组件名',
                }
            ]);
            this.props.answers.name = answers.name;
        }
    }
    writing() {
        const { type, author, page, name } = this.props.answers;
        // this.templatePath();// 获取模板的上下文路径  默认 ./templates，使用sourceRoot()方法可改变，但会变为目标项目的路径
        // this.destinationPath();// 获取目标项目的上下文 
        // console.log(this.templatePath(), this.destinationPath());
        const componentName = upperFirst(camelCase(name));
        const context = {
            author,
            componentName,
            page,
            date: new Date().toLocaleString(),
          };
        if (name) {
            this.fs.copyTpl(
                this.templatePath('module/'),
                this.destinationPath(`src/packages/template/${componentName}`), 
                context
            );
        }
        if (page) {
            this.fs.copyTpl(
                this.templatePath('page/'), 
                this.destinationPath(`src/components/Page/`), 
                context
            );
        }
    }
};