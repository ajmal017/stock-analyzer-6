// Common used value formatters

export const numberFormatter = ({ value }) => `${(parseFloat(value).toFixed(2))}`;
export const numberWithSignFormatter = ({ value }) => `${value > 0 ? '+' : ''}${(parseFloat(value).toFixed(2))}`;

export const pctFormatter = ({ value }) => `${(parseFloat(value).toFixed(2))}%`;
export const pctWithSignFormatter = ({ value }) => `${value > 0 ? '+' : ''}${(parseFloat(value).toFixed(2))}%`;

export const volumeFormatter = ({ value }) => {
  if (value > 1e9) {
    return `${(parseFloat(value / 1e9).toFixed(2))} bn`;
  } else if (value > 1e6) {
    return `${(parseFloat(value / 1e6).toFixed(2))} mm`;
  } else if (value > 1e3) {
    return `${(parseFloat(value / 1e3).toFixed(2))} k`;
  } else {
    return `${(parseFloat(value).toFixed(2))} k`;
  }
};

// Common used cell style formatters

export const priceAndChangeCellStyle = params => {
  // Based on change and changeRate field
  // must has field change or changeRate in rowData
  var val = params.node.data.change || params.node.data.changeRate;
  if (val > 0) {
    return { color: 'green', fontWeight: 'bold' };
  } else if (val < 0) {
    return { color: 'red', fontWeight: 'bold' };
  } else {
    return {};
  }
};

export const bgGreenRedColorMapCellStyle = threshold => params => {
  let degree = Math.min(Math.abs(params.value) / threshold, 1);
  if (params.value > 0) {
    return {
      backgroundColor: `rgb(0, ${degree * 64 + 144}, 0)`, color: '#fff'
    };
  } else if (params.value < 0) {
    return {
      backgroundColor: `rgb(${degree * 64 + 144}, 0, 0)`, color: '#fff'
    };
  } else {
    return {};
  }
};

// Common used cell renderer
export const idCellRenderer = params => {
  const id = params.node.data.id;
  return `<a href ='/stock-view/${id}' style='color: #fff'>${id}</>`;
};