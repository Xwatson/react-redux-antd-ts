/**
 * Created by xwatson on 2016/12/22.
 */
import * as React from 'react'
import { Input } from 'antd'

export interface TableEditInputProps {
    value: string
    editable: boolean
    status: string
    onChange: (value: string) => void
}
export interface TableEditInputStates {
    value: string
    editable: boolean
}

export default class TableEditInput extends React.Component<TableEditInputProps, TableEditInputStates> {
    private cacheValue: string
    constructor(props: any) {
        super(props)
        this.state = {
            value: this.props.value,
            editable: this.props.editable || false
        }
    }
    componentWillReceiveProps(nextProps: any): void {
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
    shouldComponentUpdate(nextProps: any, nextState: any): boolean {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value
    }

    handleChange(e: any): void {
        const value = e.target.value
        this.setState({ value })
    }
    render(): JSX.Element {
        const { value, editable } = this.state
        return (
            <div>
                {
                    editable ?
                        <div>
                            <Input value={value} onChange={e => this.handleChange(e)} />
                        </div> :
                        <div className="editable-row-text">
                            {value || ' '}
                        </div>
                }
            </div>
        )
    }
}
