export const CTabListStyles = {
    justifyContent: 'space-between',
    borderBottom: '0px solid',
    bgColor: 'blue.400',
};

export const CTabStyles = {
    color: 'white',
    fontSize: '2xl',
    fontFamily: 'heading',
    fontWeight: 'semibold',
    borderBottom: '4px solid',
    borderBottomColor: 'blue.400',
    _selected: {
        color: 'white',
        borderBottomColor: 'orange.400',
    },
    _focus: {
        boxShadow: 'none',
    },
    _active: {
        bgColor: 'blue.300',
        borderBottomColor: 'blue.300',
        _selected: {
            borderBottomColor: 'orange.400',
        },
    },
};
