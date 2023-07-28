export const styles = {
    buttons:{
        display: 'flex',
        marginTop:'10px'
    },
    alignBottom: {
        width: '100%',
        display: 'flex',
        justifyContent:'end'
    },
    gridContainer: {
        float: 'left',
        width: '100%',
        height: '390px',
    },
    gridPagination: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '5px 0',
        columnGap: '7px',
        buttons: {
            width: '35px',
            height: '35px',
            border: '1px solid var(--GridPageButtonBorder)',
            borderRadius: '4px',
            cursor: 'pointer',
            textAlign: 'center',

            color: 'var(--GridPageNumberColor)',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '21px',
            fontFamily: 'Poppins',
            pageButton: {
                padding: '6px 0'
            },

            icons: {
                width: 'fit-content',
                height: 'fit-content',
                color: 'var(--GridPageIconColor)'
            }
        },
        selectedButton: {
            width: '35px',
            height: '35px',
            border: '1px solid var(--GridPageButtonBorder)',
            borderRadius: '4px',
            cursor: 'pointer',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '21px',
            fontFamily: 'Poppins',
            pageButton: {
                padding: '6px 0'
            },
            color: 'var(--ButtonBGColor)',
            backgroundColor: 'var(--ButtonBorderColor)'
        }
    },
    popupStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '420px',
        height: '500px',
      
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #707070',
        boxShadow: 24,
        p: 4,
    },
    popupContent: {
        title: {
            width:'100%',
            marginBottom: '20px'
        },
        titleText :{
            textAlign: 'left',
            font: 'normal normal medium 24px/28px Helvetica Neue',
            fontWeight: '600',
            letterSpacing: '0px',
            color: '#293E53',
            opacity: 1,
            paddingBottom: '40px',
            width: '100px',
            height: '27px',
        },
        closeButton: {
            position: "absolute",
            top: '0',
            right: '0'
        },
        dropdown: {
            width: '100%',
            height: '35px',
            maxWidth: '200px',
            marginLeft: '15px',
            font: 'normal normal medium 24px/28px Helvetica Neue'
        },
        row: {
            display: 'inline-flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '12px'
        },
        showLabel: {
            display: 'inline-flex',
            alignItems: 'center',
            width: '100%',
            padding: '3px',
            marginBottom: '12px'
        },
        hideLabel: {
            display: 'none'
        },
        button: {
            marginTop: '18px',
            display: 'inline-flex',
            justifyContent: 'center',
            width: '100%'
        },
        restaurantCard:{
            width: '400px',
            height: '300px',
            display: 'inline-flex',
            justifyContent: 'center',
        }

    }
}