<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Rental Agreement - Booking #{{ $booking->id }}</title>
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

        .notes-box {
            background-color: #fffaf0;
            border: 1px solid #feebc8;
            padding: 6px 8px;
            border-radius: 3px;
            margin-bottom: 8px;
            font-size: 10px;
        }

        .terms {
            font-size: 9.5px;
            color: #4a5568;
            margin-top: 6px;
            line-height: 1.35;
        }

        .terms h4 {
            font-size: 10px;
            margin: 6px 0 3px 0;
            text-transform: uppercase;
            color: #1a202c;
        }

        .terms ol,
        .terms ul {
            margin: 0;
            padding-left: 16px;
        }

        .terms li {
            margin-bottom: 2.5px;
        }

        .signatures {
            margin-top: 24px;
            width: 100%;
        }

        .signatures td {
            width: 50%;
            vertical-align: bottom;
            text-align: center;
        }

        .signature-box {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .signature-img {
            height: 90px;
            width: auto;
            display: block;
            margin: 0 auto -12px auto;
            position: relative;
            z-index: 2;
        }

        .signature-line {
            width: 70%;
            border-bottom: 1px solid #c80000;
            margin: 0 auto 4px auto;
            position: relative;
            z-index: 1;
        }
    </style>
</head>

<body>

    <!-- Header -->
    <div class="header">
        <div class="owner-name">SEWALENSAMY</div>
        <div class="doc-title">Equipment Rental Agreement</div>
        <div class="doc-ref">
            Agreement Ref: <span class="text-accent">#AGR-{{ str_pad($booking->id, 6, '0', STR_PAD_LEFT) }}</span> | Date: {{ \Carbon\Carbon::parse($booking->created_at)->format('d M Y') }}
        </div>
    </div>

    <!-- Parties Information -->
    <table class="two-column-table">
        <tbody>
            <tr>
                <!-- Section 1: Lessor (Owner) Column -->
                <td>
                    <div class="section-title">1. Owner (Lessor) Details</div>
                    <table class="table-info">
                        <tr>
                            <td class="label">Owner Name:</td>
                            <td><strong>Azfar bin Azhar</strong></td>
                        </tr>
                        <tr>
                            <td class="label">Phone:</td>
                            <td>014-6308200</td>
                        </tr>
                        <tr>
                            <td class="label">Address:</td>
                            <td>Sepang, Selangor, Malaysia</td>
                        </tr>
                    </table>
                </td>

                <!-- Section 2: Lessee (Client) Column -->
                <td>
                    <div class="section-title">2. Renter (Lessee) Details</div>
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
                            <td class="label">IC / Passport:</td>
                            <td>{{ $booking->client->ic_or_passport ?? 'N/A' }}</td>
                        </tr>
                        <tr>
                            <td class="label">Address:</td>
                            <td>{{ $booking->client->address ?? 'N/A' }}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Section 2: Booking Details -->
    <div class="section-title">3. Booking & Item Information</div>
    <table class="table-info" style="margin-bottom: 6px;">
        <tr>
            <td class="label" style="width: 15%;">Item Rented:</td>
            <td style="width: 35%;"><strong class="text-accent">{{ $booking->item->name ?? 'N/A' }}</strong></td>
            <td class="label" style="width: 15%;">Booking Status:</td>
            <td style="width: 35%;"><strong>{{ $booking->booking_status }}</strong></td>
        </tr>
        <tr>
            <td class="label" style="width: 15%;">Start Date:</td>
            <td style="width: 35%;">{{ \Carbon\Carbon::parse($booking->start_date)->format('d M Y') }}</td>
            <td class="label" style="width: 15%;">Payment Status:</td>
            <td style="width: 35%;"><strong class="text-accent">{{ $booking->payment_status }}</strong></td>
        </tr>
        <tr>
            <td class="label" style="width: 15%;">End Date:</td>
            <td style="width: 35%;">{{ \Carbon\Carbon::parse($booking->end_date)->format('d M Y') }}</td>
            <td class="label" style="width: 15%;">Duration:</td>
            <td style="width: 35%;">{{ $booking->total_days }} Days</td>
        </tr>
    </table>

    <!-- Section : Pricing Breakdown -->
    <div class="section-title">4. Pricing Breakdown</div>
    <table class="table-summary">
        <thead>
            <tr>
                <th>Item Description</th>
                <th>Duration</th>
                <th>Daily Rate (RM)</th>
                <th>Total Amount (RM)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $booking->item->name ?? 'Equipment Rental' }}</td>
                <td>{{ $booking->total_days }} Days</td>
                <td>RM {{ number_format((float)$booking->daily_rate, 2) }}</td>
                <td><strong class="text-accent">RM {{ number_format((float)$booking->total_amount, 2) }}</strong></td>
            </tr>
        </tbody>
    </table>

    <!-- Section 5: Notes / Remarks -->
    @if(!empty($booking->notes))
    <div class="section-title">5. Additional Notes & Instructions</div>
    <div class="notes-box">
        {{ $booking->notes }}
    </div>
    @endif

    <!-- Section 5: Security Deposit & Terms -->
    <div class="section-title">6. Terms & Conditions</div>
    <div class="terms">
        <p><strong class="text-accent">Security Deposit:</strong> Refunded upon equipment return and inspection. Deductions apply for damage, missing parts, or late fees.</p>
        <ol>
            <li>Renter confirms equipment was inspected and received in good condition.</li>
            <li>Renter assumes full responsibility for equipment from pickup until returned to Owner.</li>
            <li>Sub-renting, transferring, or illegal use of equipment is strictly prohibited.</li>
            <li>Renter agrees to cover full repair or replacement costs for any loss, theft, or damage.</li>
            <li>Late returns incur fees of <span class="text-accent">RM50/day</span> or <span class="text-accent">RM10 per 30 minutes</span> without prior written approval.</li>
            <li>By signing below, Renter agrees to all responsibility and terms outlined above.</li>
        </ol>
    </div>

    <!-- Signatures -->
    <table class="signatures">
        <tr>
            <td>
                <div class="signature-box">
                    <img src="{{ public_path('assets/signature.png') }}" alt="Owner Signature" class="signature-img">
                    <div class="signature-line"></div>
                </div>
                <strong>Owner Signature</strong><br>
                <span>Azfar bin Azhar</span>
            </td>
            <td>
                <div class="signature-box" style="padding-top: 27px;">
                    <div class="signature-line"></div>
                </div>
                <strong>Renter Signature</strong><br>
                <span>{{ $booking->client->name ?? 'Client' }}</span>
            </td>
        </tr>
    </table>

</body>

</html>