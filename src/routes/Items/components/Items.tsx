/**
 * Created by xwatson on 2016/12/9.
 */
import * as React from 'react'
import { Table, Popconfirm, DatePicker, Calendar } from 'antd'
import { FormattedMessage } from 'react-intl'
import { browserHistory } from 'react-router'
import moment from 'moment'
import TableEditInput from '../../../components/TableEditInput'
import TableEditSelect from '../../../components/TableEditSelect'
import TableEditInputSearch from '../../../components/TableEditInputSearch'

export interface ItemsProps {
    params: object
    fetchItems: () => any
    data: any
}
export interface ItemsStates {
    inputSearch?: Array<any>
    data: Array<any>
}
export interface ItemsModel {
    key: string
    name: string
    age: number
    address: string
}
export default class Items extends React.Component<ItemsProps, ItemsStates> {
    private columns: Array<any>
    constructor(props: any) {
        super(props)
        // const { params: { id } } = props
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            render: (text: string, record: any, index: number) => this.renderColumns(this.state.data, index, 'name', text)
        }, {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            render: (text: string, record: any, index: number) => this.renderColumnsSelect(this.state.data, index, 'age', text)
        }, {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            render: (text: string, record: any, index: number) => this.renderColumnsInputSearch(this.state.data, index, 'address', text)
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text: string, record: any, index: number) => {
                const { editable } = this.state.data[index].name
                return (<div className="editable-row-operations">
                    {
                        editable ?
                            <span>
                                <a onClick={() => this.editDone(index, 'save')}>Save</a>&nbsp;&nbsp;
                                <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                                    <a>Cancel</a>
                                </Popconfirm>
                            </span> :
                            <span>
                                <a onClick={() => this.edit(index)}>Edit</a>
                            </span>
                    }
                    &nbsp;&nbsp;<span><a onClick={() => this.detail(index)}>detail</a></span></div>)
            }
        }]
        this.state = {
            inputSearch: [],
            data: [{
                key: '0',
                name: {
                    editable: false,
                    value: 'Edward King 0'
                },
                age: {
                    editable: false,
                    value: '32'
                },
                address: {
                    editable: false,
                    value: 'London, Park Lane no. 0'
                }
            }]
        }
    }

    renderColumns(data: Array<any>, index: number, key: string, text: string): any {
        const { editable, status } = data[index][key]
        if (typeof editable === 'undefined') {
            return text
        }
        return (<TableEditInput editable={editable} value={text} onChange={value => this.handleChange(key, index, value)} status={status} />)
    }

    renderColumnsSelect(data: Array<any>, index: number, key: string, text: string): any {
        const editable: true = data[index][key].editable
        const status: string = data[index][key].status
        if (typeof editable === 'undefined') {
            return text
        }
        const options = [
            {
                id: 1,
                value: 'jack',
                text: 'Jack'
            }, {
                id: 1,
                value: 'lucy',
                text: 'Lucy'
            }, {
                id: 1,
                value: 'tom',
                text: 'Tom'
            }
        ]

        return (<TableEditSelect editable={editable} options={options} value={text} onChange={value => this.handleChange(key, index, value)} status={status} />)
    }
    renderColumnsInputSearch(data: Array<any>, index: number, key: string, text: string): any {
        const editable: true = data[index][key].editable
        const status: string = data[index][key].status
        if (typeof editable === 'undefined') {
            return text
        }
        return (
            <TableEditInputSearch style={{ width: '200px' }} editable={editable} optionData={this.state.inputSearch}
              onSearch={value => this.handleSearch(key, index, value)} value={text} onChange={value => this.handleChange(key, index, value)} status={status} />
        )
    }
    handleSearch(key: string, index: number, value: string): void {
        if (value === '') {
            return
        }
        let _search = this.state.inputSearch || []
        // 模拟数据请求
        setTimeout(
            () => {
                _search.push({ value: '1122' + value, text: '1122' + value })
                this.setState({ ...this.state, inputSearch: _search })
            },
            1000)
    }
    handleChange(key: string, index: number, value: string): void {
        const { data } = this.state
        data[index][key].value = value
        this.setState({ data })
    }

    edit(index: number): void {
        const { data } = this.state
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true
            }
        })
        this.setState({ data })
    }
    detail(index: number): void {
        browserHistory.push('/items/123')
    }
    editDone(index: number, type: string): void {
        const { data } = this.state
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false
                data[index][item].status = type
            }
        })
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status
                }
            })
        })
    }

    render(): JSX.Element {
        const { data } = this.state
        const dataSource = data.map((item) => {
            const obj = {}
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value
            })
            return obj
        })
        const columns = this.columns
        return (
            <div>
                <h4><FormattedMessage id="Items.Title" defaultMessage="列表页" /></h4>
                <Table bordered dataSource={dataSource} columns={columns} />
                <DatePicker />
                <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} value={moment()} />
                </div>
            </div>
        )
    }
}
/* export default class Items extends Component{
 constructor(props) {
 super(props)
 console.log(props)
 }

 componentDidMount(){
 this.props.fetchItems()
 }
 componentWillReceiveProps(){

 }
 render() {
 let {tableDate} = this.props.items
 //console.log(this.props)
 return (
 <Table columns={columns} dataSource={tableDate} />
 )
 }
 }

 Items.propTypes = {
 columns : React.PropTypes.array,
 data : React.PropTypes.array
 } */
