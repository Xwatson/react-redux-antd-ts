/**
 * Created by xwatson on 2016/12/23.
 */
import * as React from 'react'
import { Input, Select, Button, Icon } from 'antd'
const Option = Select.Option
import classNames from 'classnames'

export interface TableEditInputSearchProps {
    value: string
    editable: boolean
    status: string
    onChange: (value: string) => void
    onSearch: (value: string) => void
    placeholder?: string
    style?: object
    optionData?: Array<any>
}
export interface TableEditInputSearchStates {
    data: Array<any>
    value: string
    focus: boolean
    editable: boolean
}
export default class TableEditInputSearch extends React.Component<TableEditInputSearchProps, TableEditInputSearchStates> { 
    private handleChangeTimer: any
    private cacheData: Array<any>
    private isSelect: boolean
    private cacheValue: string
    constructor(props: any) {
        super(props)
        this.handleChangeTimer = null
        this.cacheData = []
        this.isSelect = false
        this.state = {
            data: this.props.optionData || [],
            value: this.props.value,
            focus: false,
            editable: this.props.editable || false
        }
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable })
            if (nextProps.editable) {
                this.cacheValue = this.state.value
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value)
            } else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue })
                this.props.onChange(this.cacheValue)
            }
        }
    }
    shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value || nextProps.optionData !== this.cacheData
    }
    handleChange(value: string) {
        if (!this.isSelect) {
            this.cacheData = this.state.data
            if (this.handleChangeTimer) {
                clearTimeout(this.handleChangeTimer)                
            }
            this.handleChangeTimer = setTimeout(
                () => {
                    this.setState({ value })
                    this.props.onSearch(value)
                },
                300)
        } else {
            this.setState({ value })
            this.isSelect = false
        }
    }
    handleSubmit() {
        console.log('输入框内容是: ', this.state.value)
    }
    handleFocus() {
        this.setState({ focus: true })
    }
    handleBlur() {
        this.setState({ focus: false })
    }
    handleSelect() {
        this.isSelect = true
    }
    render() {
        const { value, editable, data } = this.state
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.value.trim()
        })
        const searchCls = classNames({
            'ant-search-input': true,
            'ant-search-input-focus': this.state.focus
        })
        const options = data.map((d, i) => <Option key={d.value + '-' + i} value={d.text}>{d.text}</Option>)
        this.cacheData = []
        return (
            editable ?
                <div className="ant-search-input-wrapper" style={this.props.style}>
                        <Input.Group className={searchCls}>
                            <Select mode="combobox" value={this.state.value} placeholder={this.props.placeholder} notFoundContent=""
                            defaultActiveFirstOption={false} filterOption={false}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onSelect={this.handleSelect}
                            >
                                {options}
                            </Select>
                            <div className="ant-input-group-wrap">
                                <Button className={btnCls} onClick={e => this.handleSubmit}>
                                    <Icon type="search" />
                                </Button>
                            </div>
                        </Input.Group>
                    </div> :
                    <div className="editable-row-text">
                        {value || ' '}
                    </div>
        )
    }
}
