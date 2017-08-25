/**
 * Created by xwatson on 2016/12/9.
 */
import * as React from 'react'
import { Link, browserHistory } from 'react-router'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
const reg = /^(\/)(items)(\/)?/

interface LeftMenuProps {
    menus: any
}
interface LeftMenuState {
    current: string
}
export default class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
    private hasClick: boolean
    constructor(props: LeftMenuProps) {
        super(props)
        this.hasClick = false
        this.state = {
            current: browserHistory.getCurrentLocation().pathname
        }
    }

    public handleClick(e: any): void {
        this.hasClick = true
        this.setState({
            ...this.state,
            current: e.key
        })
    }
    public convertDetailPage(): string {
        let location = browserHistory.getCurrentLocation()
        let match = location.pathname.match(reg)
        return match && match[3] ? '/' + match[2] : location.pathname
    }
    public _renderSubs(menus: any): JSX.Element {
        return menus.map(function(item: any) {
            return (
                <SubMenu key={item.key} name={item.name} title={item.title}>
                    {
                        item.items.map(function(item2: any) {
                            return <Menu.Item key={item2.router} name={item2.name}><Link to={item2.router}>{item2.name}</Link></Menu.Item>
                        })
                    }
                </SubMenu>
            )
        })
    }
    public render(): JSX.Element {
        this.hasClick = false
        let { menus } = this.props
        let current = this.hasClick ? this.state.current : this.convertDetailPage()
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]}
            theme={menus.theme} defaultOpenKeys={menus.defaultOpenKeys}
            mode="inline" >
                {this._renderSubs(menus.subs)}
            </Menu>
        )
    }
}
