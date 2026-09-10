<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Payment Receipt - {{ $payment->receipt_number ?? 'REC-' . str_pad($booking->id, 6, '0', STR_PAD_LEFT) }}</title>
    <style>
        @page {
            size: A4 portrait;
            margin: 10mm 12mm;
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 10.5px;
            color: #2d3748;
            background-color: #ffffff;
            line-height: 1.4;
            margin: 0;
            padding: 0;
        }

        .header {
            text-align: center;
            margin-bottom: 12px;
            border-bottom: 2px solid #c80000;
            padding-bottom: 8px;
        }

        .header .owner-name {
            font-size: 22px;
            font-weight: bold;
            color: #c80000;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .header .doc-title {
            margin-top: 4px;
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
            color: #1a202c;
        }

        .header .doc-ref {
            font-size: 9.5px;
            color: #718096;
            margin-top: 2px;
        }

        .section-title {
            font-size: 10.5px;
            font-weight: bold;
            background-color: #f7fafc;
            padding: 4px 8px;
            border-left: 3.5px solid #c80000;
            margin-top: 10px;
            margin-bottom: 6px;
            text-transform: uppercase;
            color: #1a202c;
        }

        .two-column-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 4px;
        }

        .two-column-table>tbody>tr>td {
            width: 50%;
            vertical-align: top;
            padding-right: 8px;
        }

        .two-column-table>tbody>tr>td:last-child {
            padding-right: 0;
            padding-left: 8px;
        }

        .table-info {
            width: 100%;
            border-collapse: collapse;
        }

        .table-info td {
            padding: 2.5px 4px;
            vertical-align: top;
        }

        .table-info td.label {
            font-weight: bold;
            width: 35%;
            color: #4a5568;
        }

        .table-summary {
            width: 100%;
            border-collapse: collapse;
            margin-top: 4px;
            margin-bottom: 8px;
        }

        .table-summary th,
        .table-summary td {
            border: 1px solid #e2e8f0;
            padding: 5px 8px;
            text-align: left;
        }

        .table-summary th {
            background-color: #f7fafc;
            font-weight: bold;
            color: #1a202c;
            font-size: 10px;
        }

        .text-accent {
            color: #c80000;
            font-weight: bold;
        }

        .badge-paid {
            display: inline-block;
            background-color: #276749;
            color: #ffffff;
            font-size: 9px;
            font-weight: bold;
            padding: 2px 6px;
            border-radius: 3px;
            text-transform: uppercase;
        }

        .notes-box {
            background-color: #fffaf0;
            border: 1px solid #feebc8;
            padding: 6px 8px;
            border-radius: 3px;
            margin-bottom: 8px;
            font-size: 10px;
        }

        .footer-thankyou {
            text-align: center;
            margin-top: 15px;
            padding-top: 10px;
            font-size: 10px;
            color: #4a5568;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <!-- Header -->
    <div class="header">
        <div class="owner-name">SEWALENSAMY</div>
        <div class="doc-title">Official Payment Receipt</div>
        <div class="doc-ref">
            Receipt No: <span class="text-accent">#REC-{{ str_pad($payment->id ?? $booking->id, 6, '0', STR_PAD_LEFT) }}</span> |
            Date Issued: {{ \Carbon\Carbon::parse($payment->created_at ?? now())->format('d M Y') }}
        </div>
    </div>

    <!-- Parties Information -->
    <table class="two-column-table">
        <tbody>
            <tr>
                <!-- Owner Info -->
                <td>
                    <div class="section-title">Issued By</div>
                    <table class="table-info">
                        <tr>
                            <td class="label">Issued By:</td>
                            <td>Azfar bin Azhar</td>
                        </tr>
                        <tr>
                            <td class="label">Phone:</td>
                            <td>014-6308200</td>
                        </tr>
                        <tr>
                            <td class="label">Email:</td>
                            <td>aa.azfarazhar@gmail.com</td>
                        </tr>
                    </table>
                </td>

                <!-- Client Info -->
                <td>
                    <div class="section-title">Received From</div>
                    <table class="table-info">
                        <tr>
                            <td class="label">Client Name:</td>
                            <td><strong>{{ $booking->client->name ?? 'N/A' }}</strong></td>
                        </tr>
                        <tr>
                            <td class="label">Phone:</td>
                            <td>{{ $booking->client->phone ?? 'N/A' }}</td>
                        </tr>
                        <tr>
                            <td class="label">Email:</td>
                            <td>{{ $booking->client->email ?? 'N/A' }}</td>
                        </tr>
                        <tr>
                            <td class="label">Booking Ref:</td>
                            <td>#{{ str_pad($booking->id, 6, '0', STR_PAD_LEFT) }}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Payment Summary Information -->
    <div class="section-title">Payment Summary</div>
    <table class="table-info" style="margin-bottom: 6px;">
        <tr>
            <td class="label" style="width: 18%;">Payment Method:</td>
            <td style="width: 32%;">QR Payment / Online Transfer</td>
            <td class="label" style="width: 18%;">Payment Status:</td>
            <td style="width: 32%;"><span class="badge-paid">{{ $booking->payment_status ?? 'PAID' }}</span></td>
        </tr>
        <tr>
            <td class="label" style="width: 18%;">Transaction ID:</td>
            <td style="width: 32%;">{{ $payment->transaction_id ?? 'N/A' }}</td>
            <td class="label" style="width: 18%;">Rental Period:</td>
            <td style="width: 32%;">{{ \Carbon\Carbon::parse($booking->start_date)->format('d M Y') }} - {{ \Carbon\Carbon::parse($booking->end_date)->format('d M Y') }}</td>
        </tr>
    </table>

    <!-- Item Details Table -->
    <div class="section-title">Item & Charge Details</div>
    <table class="table-summary">
        <thead>
            <tr>
                <th>Description</th>
                <th style="width: 12%; text-align: center;">Qty / Days</th>
                <th style="width: 20%; text-align: right;">Unit Rate (RM)</th>
                <th style="width: 20%; text-align: right;">Total (RM)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $booking->item->name ?? 'Equipment Rental' }}</td>
                <td style="text-align: center;">{{ $booking->total_days }} Days</td>
                <td style="text-align: right;">RM {{ number_format((float)$booking->daily_rate, 2) }}</td>
                <td style="text-align: right;">RM {{ number_format((float)$booking->total_amount, 2) }}</td>
            </tr>
            @if(!empty($booking->security_deposit) && $booking->security_deposit > 0)
            <tr>
                <td>Security Deposit (Refundable)</td>
                <td style="text-align: center;">1</td>
                <td style="text-align: right;">RM {{ number_format((float)$booking->security_deposit, 2) }}</td>
                <td style="text-align: right;">RM {{ number_format((float)$booking->security_deposit, 2) }}</td>
            </tr>
            @endif
            <tr>
                <td colspan="3" style="text-align: right; font-weight: bold;">Subtotal:</td>
                <td style="text-align: right;">RM {{ number_format((float)($booking->total_amount + ($booking->security_deposit ?? 0)), 2) }}</td>
            </tr>
            <tr>
                <td colspan="3" style="text-align: right; font-weight: bold;" class="text-accent">Amount Paid:</td>
                <td style="text-align: right;" class="text-accent">RM {{ number_format((float)($payment->amount_paid ?? $booking->total_amount), 2) }}</td>
            </tr>
        </tbody>
    </table>

    <!-- Thank you message -->
    <div class="footer-thankyou">
        This is a digital receipt and does not require physical signature.
    </div>

</body>

</html>